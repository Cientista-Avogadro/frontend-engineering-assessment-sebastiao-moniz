import {
    Button,
    Flex, Input, InputGroup,
    InputLeftElement,
    Stack,
    TableContainer,
    Text
} from "@chakra-ui/react";
import {Result} from "../types";
import {
    createColumnHelper
} from "@tanstack/react-table";
import {SearchIcon} from "@chakra-ui/icons";
import {useQuery} from "@tanstack/react-query";
import {getAllMedicals} from "../helpers/MedicalApi.ts";
import {ChangeEvent, useCallback, useContext, useEffect, useState} from "react";
import ClinicalStoreContext from "../contexts/ClinicalStore.tsx";
import {DataTable} from "../components/DataTable.tsx";
import {ModalPreview} from "../components/PreviewDataModal.tsx";


export const HomePage = () => {
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    const [page, setPage] = useState<number>(0)
    const {setMedicalsDate, MedicalsDate, setCurrentMedical} = useContext(ClinicalStoreContext);
    const [filteredMedicals, setFilteredMedical] = useState(MedicalsDate)

    const {data: response, isLoading} = useQuery(
        {
            queryKey: ['medicals'],
            queryFn: async () => await getAllMedicals({
                page,
                results: 50
            })
        })
    const columnHelper = createColumnHelper<Result>()

    const handleSearch = ({target:{value}}: ChangeEvent<HTMLInputElement>) => {

        const filteredItems = MedicalsDate.filter(m => (m.name.first)
            .toLowerCase()
            .includes(value.toLowerCase()))

        setFilteredMedical(filteredItems);
    }

    const loadMore = useCallback(() => {
        if (response) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setPage(prevState => {
                return ({
                    page: prevState + 1
                });
            })

            // eslint-disable-next-line no-unsafe-optional-chaining
            setMedicalsDate([...MedicalsDate, ...response?.results])
        }

    }, [MedicalsDate, response, setMedicalsDate])

    useEffect(() => {
        if (page == 0) {
            loadMore()

        }
        setFilteredMedical(MedicalsDate);
    }, [page, loadMore, MedicalsDate]);

    const handleClick = (value: Result) => {
        if (value) {
            setCurrentMedical(value)
            onOpen();
        }

    }

    const columns =
        [

            columnHelper.accessor(row => row.name, {
                id: 'name',
                cell: info => <i>{
                    info.getValue().title + " " + info.getValue().first + " " + info.getValue().last
                }</i>,
                header: () => <span>Name</span>
            }),
            columnHelper.accessor(row => row.gender, {
                id: 'gender',
                cell: info => <i>{info.getValue()}</i>,
                header: () => <span>Gender</span>
            }),
            columnHelper.accessor(row => row.dob.date, {
                id: 'birth',
                cell: info => <i>{new Date(info.getValue()).toLocaleDateString().toString()}</i>,
                header: () => <span>Birth</span>
            }),
            columnHelper.accessor(row => row, {
                id: 'actions',
                enableSorting: false,
                cell: info => {
                    return (
                        <Flex gap={2} alignItems={"center"}>
                            <ModalPreview colorScheme={"blue"}
                                          onOpen={() => handleClick(info.getValue())} isOpen={isOpen}
                                          onClose={onClose}/>
                        </Flex>
                    )
                },
                header: () => <span>Actions</span>
            })
        ]


    return (
        <Flex gap={4} display={"flex"} flexDir={"column"} w={"100%"}>

            <Text fontSize={["8pt", null, "2xl"]} my="2" fontWeight={"semibold"}>
                Gestão de Médicos ({filteredMedicals.length})
            </Text>

            <Stack>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                        <SearchIcon/>
                    </InputLeftElement>
                    <Input  onChange={handleSearch} placeholder='Search...'/>
                </InputGroup>
            </Stack>

            <div style={{height: 400, width: '100%', alignSelf: "center"}}>
                <TableContainer>
                    <DataTable columns={columns} data={filteredMedicals}/>

                    <Flex justifyContent={"center"} my={4}>
                        <Button isLoading={isLoading} onClick={loadMore}>
                            {isLoading ? 'Loading...' : 'Load More'}
                        </Button>
                    </Flex>

                </TableContainer>

            </div>
        </Flex>
    )
}
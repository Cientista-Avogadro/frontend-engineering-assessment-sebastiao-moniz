import {
    Avatar,
    Button, Flex, Text,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader, Divider, Tooltip, ModalOverlay
} from "@chakra-ui/react";
import {useContext} from "react";
import ClinicalStoreContext from "../contexts/ClinicalStore.tsx";

import { BiShare} from "react-icons/bi";
import {FiMapPin} from "react-icons/fi";
import {RWebShare} from "react-web-share";

interface ModalPreviewProps {
    colorScheme?: string;
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean
}

export const ModalPreview = ({colorScheme, onOpen, isOpen, onClose}: ModalPreviewProps) => {

    const {currentMedical} = useContext(ClinicalStoreContext);


    return (
        <>
            <Tooltip label={"View Profile"}>
                <Button colorScheme={colorScheme} onClick={onOpen}>View</Button>
            </Tooltip>

            <Modal motionPreset="none" trapFocus={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px'
                />
                <ModalContent>
                    <ModalHeader>
                        <div className={'absolute -top-[50px] right-[38%] flex items-center justify-center'}>
                            <Avatar objectFit={"contain"} size={"xl"}
                                    name={currentMedical?.name?.first + " " + currentMedical?.name?.last}
                                    src={currentMedical?.picture?.medium}/>
                        </div>
                        <Flex direction={"column"} align={"center"} mt={8}>
                            <Text
                                className={"font-bold text-lg"}>{currentMedical?.name?.title + "." + currentMedical?.name?.first + " " + currentMedical?.name?.last}</Text>
                            <Text className={"flex items-center"}>
                                <FiMapPin className={'text-red-900'}/>
                                {currentMedical?.location?.city + ", " + currentMedical?.location?.country + ", " + currentMedical?.nat}
                            </Text>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody className={'flex flex-col gap-2'}>
                        <Flex gap={1} className={"flex flex-col"}>
                            <Text className={"font-bold text-lg"}>Personal Information</Text>
                            <p>
                                <Text>
                                    <span className={'font-bold'}>Date of Birth:</span>
                                    <span>{new Date(currentMedical?.dob?.date).toLocaleDateString("en-US")} - {currentMedical?.dob?.age} years old</span>
                                </Text>
                                {
                                    currentMedical?.id?.value ? (<Text>
                                        <span className={'font-bold'}>ID({currentMedical?.id?.name}):</span>
                                        <span>{currentMedical?.id?.value}</span>
                                    </Text>) : null
                                }
                                <Text>
                                    <span className={'font-bold'}>Gender:</span>
                                    <span>{currentMedical?.gender}</span>
                                </Text>
                            </p>
                        </Flex>
                        <Divider/>
                        <Flex gap={1} className={"flex flex-col"}>
                            <Text className={"font-bold text-lg"}>Contacts Information</Text>
                            <p>
                                <Text>
                                    <span className={'font-bold'}>Phone Number:</span>
                                    <span>{currentMedical?.phone} / {currentMedical?.cell}</span>
                                </Text>
                                <Text>
                                    <span className={'font-bold'}>Email:</span>
                                    <span>{currentMedical?.email}</span>
                                </Text>
                            </p>
                        </Flex>
                        <Divider/>
                        <Flex gap={4} className={"flex flex-col"}>
                            <Text className={"font-bold text-lg"}>About Me</Text>
                            <p>
                                {
                                    `
                                        I'm ${currentMedical?.name?.first} ${currentMedical?.name?.last}, I'm ${currentMedical?.dob?.age} years old,
                                        I live at ${currentMedical?.location?.city}, concretely at ${currentMedical?.location?.street?.name} street.
                                    `
                                }
                            </p>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Flex className={'w-full items-center justify-center'}>
                            <Tooltip label={"Share Profile"}>
                                <RWebShare
                                    data={{
                                        text: currentMedical?.name?.first + " " + currentMedical?.name?.last,
                                        url: "http://localhost:5173",
                                        title: "Sharing Contact",
                                    }}
                                    onClick={() =>
                                        console.log("shared successfully!")
                                    }
                                >
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        <BiShare className={'mr-2'}/>
                                        Share Profile
                                    </Button>
                                </RWebShare>
                            </Tooltip>

                        </Flex>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
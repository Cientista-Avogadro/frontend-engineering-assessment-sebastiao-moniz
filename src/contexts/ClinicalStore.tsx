import  {createContext, useState} from "react";
import {ContextDataType, Result} from "../types";


const ClinicalStoreContext = createContext<ContextDataType>(
    {} as ContextDataType
);
export const ClinicalStoreProvider = ({children}: never) => {
    const [MedicalsDate, setMedicalsDate] = useState<Result[]>([] as Result[]);
    const [currentMedical, setCurrentMedical] = useState<Result>({} as Result);
    const [pathname, setPathname] = useState("");

    //Cruds
    const getMedicals = () => {
        return MedicalsDate;
    };
    const createMedical = (_MedicalsDate: Result) => {
        setMedicalsDate([...MedicalsDate, _MedicalsDate]);
    };

    return (
        <ClinicalStoreContext.Provider
            value={{
                currentMedical,
                setCurrentMedical,
                getMedicals,
                createMedical,
                MedicalsDate,
                setMedicalsDate,
                pathname,
                setPathname
            }}
        >
            {children}
        </ClinicalStoreContext.Provider>
    );
};

export default ClinicalStoreContext;

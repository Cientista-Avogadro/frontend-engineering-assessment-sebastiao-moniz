import {ChakraProvider, CSSReset} from "@chakra-ui/react";
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import {RoutesApp} from "./routes";
import {ClinicalStoreProvider} from "./contexts/ClinicalStore.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    const queryClient = new QueryClient();

    return (
        <ChakraProvider>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>


                    <CSSReset/>
                    <ClinicalStoreProvider>
                        <RoutesApp/>
                    </ClinicalStoreProvider>


                </QueryClientProvider>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App

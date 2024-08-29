import {Grid} from "@chakra-ui/react";
import {Content} from "../components/Content.tsx";
import {Header} from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {

    return (
        <Grid

        >
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Grid>
    )
}
import { Route, Routes } from "react-router-dom";
import {MainLayout} from "../Layouts/MainLayout.tsx";
import {HomePage} from "../pages/Home.tsx";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    )
}
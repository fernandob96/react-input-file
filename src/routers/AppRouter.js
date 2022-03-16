import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import InputFileScreen from "../components/fields/InputFileScreen";
import { Navbar } from "../components/ui/NavBar";


export const AppRouter = ()=> {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<InputFileScreen />} />

            </Routes>
        </BrowserRouter>
    )
}
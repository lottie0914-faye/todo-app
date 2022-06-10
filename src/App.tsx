import React from "react";
import { HeaderBar } from "./components/HeaderBar";
import { MainContents } from "./components/MainContents";
import { FooterBar } from "./components/FooterBar";
import { BrowserRouter } from "react-router-dom";


export const App = () => {
    return (
        <>
            <BrowserRouter>
                <HeaderBar />
                <MainContents />
                <FooterBar />
            </BrowserRouter>
        </>
    );
};
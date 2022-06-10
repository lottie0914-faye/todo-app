import React from "react";
import { HeaderBar } from "./components/HeaderBar";
import { MainContents } from "./components/MainContents";
import { FooterBar } from "./components/FooterBar";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";


export const App = () => {
    return (
        <>
            <CssBaseline>

                <BrowserRouter>
                    <HeaderBar />
                    <Container maxWidth="xl">
                        <MainContents />
                    </Container>
                    <FooterBar />
                </BrowserRouter>
                
            </CssBaseline>
        </>
    );
};
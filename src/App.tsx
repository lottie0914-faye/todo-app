import { HeaderBar } from "./components/HeaderBar";
import { MainContents } from "./components/MainContents";
import { FooterBar } from "./components/FooterBar";
 
 
export const App = () => {
    return (
        <>
            <HeaderBar />
            <MainContents />
            <FooterBar />
        </>
    );
};
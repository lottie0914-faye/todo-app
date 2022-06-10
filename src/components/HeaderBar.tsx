import React from "react";
import { Link } from "react-router-dom";

export const HeaderBar = () => {
    return (
        <>
            <header style={{"backgroundColor" : "thistle"}}>
                <h1>React x TypeScript アプリケーションサンプル</h1>
                <ul>
                    <li>
                        <Link to="/" >Top</Link>
                    </li>
                    
                </ul>
            </header>
        </>
    );
};
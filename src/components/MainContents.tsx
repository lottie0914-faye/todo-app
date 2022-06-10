import React from "react";
import { ToDoApp } from "./toDo/ToDoApp";
// import { useParams } from "react-router-dom";
 
import {
    Route,
    Routes,
} from "react-router-dom";

export const MainContents = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ToDoApp />} />
            </Routes>
            
        </main>
    );
};
import React, { createContext, useState, useEffect } from "react";
import { Task } from "../../types/Task";

export const ToDoAppContext = createContext<
{
    tasks: Array<Task>,
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}>(undefined);

export const ToDoAppProvider = (props) => {
    const { children } = props;
    const [tasks, setTasks] = useState<Array<Task>>([]);
    useEffect(() => {
        if(sessionStorage.getItem("tasks") !== "null") {
            setTasks(JSON.parse(sessionStorage.getItem("tasks")));
        }
    }, []);
    useEffect(() => {
        sessionStorage.setItem("tasks", JSON.stringify(tasks));
    }, );
    return (
        <ToDoAppContext.Provider value={{ tasks, setTasks }} >
            { children }
        </ToDoAppContext.Provider>
    );
};
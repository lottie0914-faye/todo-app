import React from "react";
import { useRef, useContext } from "react";
import { ToDoAppContext } from "./ToDoAppProvider";
import { Task } from "../../types/Task";
import { Box, Button, TextField } from "@mui/material";

export const TodoInput = () => {
    const { tasks, setTasks } = useContext(ToDoAppContext);
    const taskInputElement = useRef<HTMLInputElement>(null);
    const currentDate = new Date().toUTCString() ;
    const addTask = () => {
        const task: Task = {
            title: taskInputElement.current.value,
            timeStamp: currentDate,
            isDone: false,
        };
        setTasks([...tasks, task]);
        console.log(taskInputElement.current.value);
        taskInputElement.current.value = "";
        console.log("addTask");
    };
    const addMemo = () => {
        const memo: Task = {
            title: taskInputElement.current.value,
            timeStamp: currentDate,
        };
        setTasks([...tasks, memo]);
        taskInputElement.current.value = "";
        console.log("addMemo");
    };
    return (
        <>
            <Box sx={{ display: "flex", gap: 2}} >
                <TextField id="outlined-flexible" label="入力欄" required variant="outlined" inputRef={taskInputElement} />
                <Button variant="contained" onClick={addTask}>Add task</Button>
                <Button variant="outlined" onClick={addMemo}>Add memo</Button>
            </Box>
        </>
    );
};
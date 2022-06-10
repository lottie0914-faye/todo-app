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
            <Box
            // sx={{
            //     width: 600,
            //     height: 300,
            //     backgroundColor: 'primary.dark',
            //     '&:hover': {
            //         backgroundColor: 'primary.main',
            //         opacity: [0.9, 0.8, 0.7],
            //     },
            // }}
            >

                <TextField id="outlined-multiline-flexible" label="入力欄" multiline required maxRows={4} variant="outlined" inputRef={taskInputElement} />
                <Button variant="contained" onClick={addTask}>Add task</Button>
                <Button variant="outlined" onClick={addMemo}>Add memo</Button>
            </Box>
        </>
    );
};
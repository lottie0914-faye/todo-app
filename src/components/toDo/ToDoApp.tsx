import React from "react";
import { ToDoAppProvider } from "./ToDoAppProvider";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { Stack, Box, Paper, styled } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const ToDoApp = () => {
    return (
        <div>
            <ToDoAppProvider>
                <Box sx={{ width: "90%", margin: 5 }}>
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <Item><TodoInput /></Item>
                        <Item><TodoList /></Item>
                    </Stack>
                </Box>
            </ToDoAppProvider>
        </div>
    );
};

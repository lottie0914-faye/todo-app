import React from "react";
import { Button } from "@mui/material";
import {
    TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator,
} from "@mui/lab";
import { Task } from "../../types/Task";

export const ToDoMemo = (props: Task): JSX.Element => {
    const { title, removeToDo, timeStamp } = props;
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Button variant="text" onClick={removeToDo}>x</Button>
                <p>{timeStamp}</p>
                <p>{ title }</p>
            </TimelineContent>
        </TimelineItem>
    );
};

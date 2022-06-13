import React from "react";

export type Task = {
    title?: string,
    isDone?: boolean,
    timeStamp: string,
    removeToDo?: (event: React.MouseEvent) => void,
};
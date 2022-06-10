import React from "react";

export type Task = {
    title: string,
    // id: number,
    isDone?: boolean,
    timeStamp: string,
    removeToDo?: (event: React.MouseEvent) => void,
};
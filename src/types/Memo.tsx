import React from "react";

export type Memo = {
    title: string, 
    timeStamp: string,
    removeToDo?: (event: React.MouseEvent) => void,
};
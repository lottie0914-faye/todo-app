import { ToDoAppProvider } from "./ToDoAppProvider";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const ToDoApp = () => {
    return (
        <>
            <ToDoAppProvider>
                <TodoInput />
                <TodoList />
            </ToDoAppProvider>
        </>
    )
}
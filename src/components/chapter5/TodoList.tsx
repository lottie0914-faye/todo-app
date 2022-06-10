import { useContext } from 'react';
import { ToDoAppContext } from './ToDoAppProvider';
import { ToDoTask } from './ToDoTask';
import { ToDoMemo } from './ToDoMemo';
import { Timeline } from '@mui/lab';


export const TodoList = () => {
    const { tasks, setTasks } = useContext(ToDoAppContext);
    const toDos = [];
    for (const task of tasks) {
        
        const removeToDo = () => {
            console.log("typeof" + typeof tasks);
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            console.log("tasks: " + tasks);
            console.log(typeof tasks);
            setTasks(Array.from(tasks));
        };
        if (task?.isDone !== undefined) {
            toDos.push(<ToDoTask title={task.title} timeStamp={task.timeStamp} isDone={task?.isDone} removeToDo={removeToDo} key={task.timeStamp}/>);
        } else {
            toDos.push(<ToDoMemo title={task.title} timeStamp={task.timeStamp}  removeToDo={removeToDo} key={task.timeStamp}/>);
        }
    }
    return (
        <>
            <Timeline>
                { toDos }
            </Timeline>
        </>
    )
}
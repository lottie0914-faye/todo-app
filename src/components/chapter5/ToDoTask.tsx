import { Task } from '../../types/Task';
import { Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';


export const ToDoTask = (props: Task) => {
    const { title, isDone, timeStamp, removeToDo } = props;

    return (
        <>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <p>{timeStamp}</p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked={isDone} />} label={title} />
                    </FormGroup>
                    <Button variant="text" onClick={removeToDo} >x</Button>
                </TimelineContent>
            </TimelineItem>

            {/* <style jsx={true}>{`
                .isDone {
                    margin-right: 10px;
                }
                .isDone:checked + .taskTitle {
                    text-decoration: line-through;
                    color: lightgray;
                }
            `}</style> */}
        </>
    );
};
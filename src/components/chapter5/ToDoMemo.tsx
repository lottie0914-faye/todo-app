import { Memo } from '../../types/Memo';
import { Button } from '@mui/material';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

export const ToDoMemo = (props: Memo) => {
    const { title, removeToDo, timeStamp } = props;
    return (
        <>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <p>{timeStamp}</p>
                    <p>{ title }</p>
                    <Button variant="text" onClick={removeToDo} >x</Button>
                </TimelineContent>
            </TimelineItem>
        </>
    );
};
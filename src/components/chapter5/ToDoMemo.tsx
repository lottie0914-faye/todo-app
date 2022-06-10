import { Button } from '@mui/material';
import {
  TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator,
} from '@mui/lab';
import { Task } from '../../types/Task';

export const ToDoMemo: JSX.IntrinsicAttributes(props: Task): JSX.Element => {
  const { title, removeToDo, timeStamp } = props;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <p>{timeStamp}</p>
        <p>{ title }</p>
        <Button variant="text" onClick={removeToDo}>x</Button>
      </TimelineContent>
    </TimelineItem>
  );
}

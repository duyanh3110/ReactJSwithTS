import React, { FunctionComponent } from "react";
import { Task } from "../models/task";

// TODO: annotate event types properly
interface Props {
  onChange: (event: any) => void;
  onAdd: (event: any) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={task.name} />
    <button type="submit">Add a task</button>
  </form>
);

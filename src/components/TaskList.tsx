import React, { FunctionComponent } from "react";

import { Task } from "../models/task";
import { TaskListItem } from "./TaskListItem";

interface Props {
  tasks: Task[];
  onDelete: (tasks: Task) => void;
}

export const TaskList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
  <ul>
    {tasks.map(task => (
      <TaskListItem task={task} onDelete={onDelete} />
    ))}
  </ul>
);

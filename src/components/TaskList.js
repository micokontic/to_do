import React, { useContext } from "react";
import { TaskListContext } from "./App.js";
import Task from "./Task.js";

function TaskList() {
  const values = useContext(TaskListContext);
  TaskList = values.tasks;
  return (
    <div>
      {TaskList.length ? (
        <ul className="list">
          {TaskList.map((task) => {
            return <Task key={task.id} prop={task} />;
          })}
        </ul>
      ) : (
        <div class="no-tasks">No tasks</div>
      )}
    </div>
  );
}

export default TaskList;

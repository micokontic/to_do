import React, { useContext } from "react";
import { FunctionContext } from "./App";
function Task(prop) {
  const obj = useContext(FunctionContext);
  const removeTask = obj.prop2;
  const editTask = obj.prop4;

  return (
    <div>
      <li className="list-item">
        <span> {prop.prop.task}</span>
        <div>
          <button className="btn-delete task-btn">
            <i
              class="fas fa-trash"
              onClick={() => {
                removeTask(prop.prop.id);
              }}
            ></i>
          </button>
          <button
            className="btn-edit task-btn "
            onClick={() => editTask(prop.prop.id, prop.prop.task)}
          >
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default Task;

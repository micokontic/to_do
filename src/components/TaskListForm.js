import React, { useContext, useState, useLayoutEffect } from "react";
import { TaskListContext } from "./App.js";
import { FunctionContext } from "./App.js";

function TaskListForm() {
  const obj = useContext(FunctionContext);
  const values = useContext(TaskListContext);
  const tasks = values.tasks;
  const edit = values.edit;
  const id = values.id;
  const addTask = obj.prop1;
  const clearTask = obj.prop3;
  const finalEdit = obj.prop5;
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    if (edit) {
      setInput(tasks.find((task) => task.id === id).task);
    } else {
      setInput("");
    }
  }, [edit]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const onSumbit = (e) => {
    console.log("usao sam odje");
    e.preventDefault();
    addTask(input);
    console.log(input);

    setInput("");
  };
  const onEdit = (e) => {
    e.preventDefault();
    finalEdit(input);
  };
  return (
    <form className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add Task"
        required
        onChange={handleChange}
        value={input}
      ></input>
      <div>
        <button
          type="submit"
          className="btn add-task-btn"
          onClick={edit ? onEdit : onSumbit}
        >
          {edit ? "Edit" : "Add"}
        </button>
        <button
          className="btn
                 clear-btn"
          onClick={() => {
            clearTask();
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default TaskListForm;

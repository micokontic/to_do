import React, { createContext, useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task.js";
import "../App.css";
import TaskListForm from "./TaskListForm";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = React.createContext();
export const FunctionContext = React.createContext();
function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Read a book",
      id: 1,
    },
    {
      task: "Collect money",
      id: 2,
    },
    {
      task: "Go run",
      id: 3,
    },
  ]);

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("0");

  const addTask = (title) => {
    setTasks([...tasks, { task: title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    const tempTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tempTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };
  const editTask = (id, input) => {
    setId(id);
    console.log(edit);

    setEdit(true);

    console.log(edit);

    console.log(edit);

    console.log("aktivirao se edit");
  };
  const finalEdit = (input) => {
    console.log(input);

    const tempTasks = tasks.map((task) => {
      if (task.id === id) {
        return { task: input, id: id };
      } else {
        return task;
      }
    });
    setTasks(tempTasks);

    setId(null);
    setEdit(false);
  };

  const obj = {
    prop1: addTask,
    prop2: removeTask,
    prop3: clearTasks,
    prop4: editTask,
    prop5: finalEdit,
  };
  const values = {
    tasks: tasks,
    edit: edit,
    id: id,
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <TaskListContext.Provider value={values}>
            <FunctionContext.Provider value={obj}>
              <TaskListForm />
              <TaskList />
            </FunctionContext.Provider>
          </TaskListContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;

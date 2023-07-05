import "./styles.css";
import { useState } from "react";
import Task from "./Task";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const inputHandler = (e) => {
    setNewTask(e.target.value);
  };

  const addHandler = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask
    };
    setToDoList([...toDoList, task]);
  };

  const editHandler = (id) => {
    let updatedTask = prompt("Enter your task", toDoList[id - 1].taskName);
    setToDoList(
      toDoList.filter((e) => {
        if (e.id === id) {
          if (updatedTask !== null) {
            return (e.taskName = updatedTask);
          } else {
            return e.taskName;
          }
        } else {
          return e.taskName;
        }
      })
    );
  };

  const deleteHandler = (id) => {
    setToDoList(
      toDoList.filter((e) => {
        return e.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1>TODO List</h1>
        <input placeholder="Write a task..." onChange={inputHandler} />
        <button onClick={addHandler} className="addBtn">
          Add Task
        </button>
      </div>

      <div className="taskList">
        {toDoList.map((task) => {
          return (
            <Task
              key={task.id}
              taskName={task.taskName}
              id={task.id}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

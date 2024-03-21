import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [drain, setCategory] = useState("All");
  const [newTask, setTasks] = useState(TASKS);

  function deleteTask(text) {
    const newTasks = newTask.filter(task => task.text !== text);
    setTasks(newTasks);
  }

  const filteredItems = newTask.filter((item) => {
    if (drain === "All") {
      return true;
    }
    return item.category === drain;
  });

  function onTaskFormSubmit(addNewTaskObj) {
    const newArr = [...newTask, addNewTaskObj]
    setTasks(newArr)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} drain={drain} setCategory={setCategory} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredItems} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {

  const task = tasks.map((things, index) => {
    return <Task key={index} text={things.text} category={things.category} deleteTask={deleteTask} />;
  })

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
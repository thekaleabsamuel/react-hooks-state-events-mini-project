import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [emptyTask, editEmptyTask] = useState([])
  const [emptyCat, editEmptyCat] = useState([])
  function getOptions() {
    return (
      <>
        <option value="All">All</option>
        <option value="Code">Code</option>
        <option value="Food">Food</option>
        <option value="Money">Money</option>
        <option value="Misc">Misc</option>
      </>
    )
  }

  function taskText(e) {
    editEmptyTask(e.target.value)
  }

  function createCat(e) {
    editEmptyCat(e.target.value)
  }

  function addNewTask(e) {
    e.preventDefault()
    const addNewTaskObj = {
      text: emptyTask,
      category: emptyCat
    }
    onTaskFormSubmit(addNewTaskObj)
  }

  return (
    <form className="new-task-form" onSubmit={(e) => addNewTask(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => taskText(e)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => createCat(e)}>
          {getOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
import React from "react";
import Task from "./Task";

function TaskList({tasks, onRemove, selectedCategory}) {
  console.log("task",tasks)

  const taskToDisplay = tasks.filter((task) => {
    if(selectedCategory === "All") {return tasks}
    return task.category.toLowerCase().includes(selectedCategory.toLowerCase())
  })

  const task = taskToDisplay.map((t, index) => {
    return <Task key={index} t={t} onRemove={onRemove}/>
  })

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
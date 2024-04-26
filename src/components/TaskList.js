import React from "react";
import Task from "./Task";

function TaskList({tasks, onRemove}) {
  console.log("task",tasks)

  const task = tasks.map((t, index) => {
    return <Task key={index} t={t} onRemove={onRemove}/>
  })

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
import React from "react";

import { isCompositeComponent } from "react-dom/test-utils";


function Task({text, category, onRemove}) {

  
  function handleClick(task){

    onRemove(text)
  }


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
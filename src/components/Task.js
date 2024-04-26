import React from "react";

import { isCompositeComponent } from "react-dom/test-utils";


function Task({t, onRemove}) {
  console.log("t", t)
  
  function handleClick(task){
    console.log("t",t)
    onRemove(t.text)
  }


  return (
    <div className="task">
      <div className="label">{t.category}</div>
      <div className="text">{t.text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
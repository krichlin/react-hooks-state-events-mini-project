import React from "react";

import { isCompositeComponent } from "react-dom/test-utils";


function Task({t}) {
  console.log("t", t)

  return (
    <div className="task">
      <div className="label">{t.category}</div>
      <div className="text">{t.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
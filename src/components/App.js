import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [tasks, setTasks] = useState(TASKS)
  console.log("tasks",tasks)

  function onRemove(text){
    const removeTask = tasks.filter((task) => task.text !== text)
    setTasks(removeTask)
    // setTasks(task.filter((task) => task.text !== test ))
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} onRemove={onRemove} />
    </div>
  );
}

export default App;
import React, {useState} from "react";

function NewTaskForm({categories, onAdd}) {

  const newCategories = categories.slice(1,5)
  console.log("newCategories",newCategories)
  const [details, setDetails] = useState("")
  const [selectCategory, setCategory] = useState("")
  console.log("details", details)
  console.log("selectCategory", selectCategory)

  function onTaskFormSubmit(e) {
    e.preventDefault()
    const newTask = {
      text: details,
      category: selectCategory
    }
    onAdd(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text"  value={details} onChange= {(e) => setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={selectCategory} onChange={(e) => setCategory(e.target.value)}>
          {newCategories.map((category) => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
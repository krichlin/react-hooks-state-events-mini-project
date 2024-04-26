import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const newCategories = categories.slice(1,5)
  console.log("newCategories",newCategories)
  const [details, setDetails] = useState("")
  const [selectCategory, setCategory] = useState("")
  console.log("details", details)
  console.log("selectCategory", selectCategory)

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
      text: details,
      category: selectCategory
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={(e)=>handleSubmit(e)}>
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
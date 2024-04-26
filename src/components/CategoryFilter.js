import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  console.log(categories)
  const [activeCategory, setActive] = useState(null)
  function handleClick(category){
    setSelectedCategory(category)
    setActive(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button className= {activeCategory === category ? "selected" : ""} key={category} onClick={()=>handleClick(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
import React from "react";

function CategoryFilter({categories, setSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button Key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
import React from "react";

function CategoryFilter({ CATEGORIES, handleCategory, outerCategory }) {
  function handleClick(event) {
    event.target.className = "selected";
    handleCategory(event);
  }
  console.log(CATEGORIES);
  const buttons = CATEGORIES.map((category) => (
    <button
      className={outerCategory === category ? "selected" : ""}
      key={category}
      onClick={handleClick}
      value={category}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;

import React from "react";

function CategoryFilter({ categories, drain, setCategory }) {

  function handleCategoryClick(filter) {
    setCategory(filter)
  }

  const dropDown = categories.map((filter, index) => {
    return (
      <button key={index} className={drain === filter ? "selected" : ""} onClick={() => handleCategoryClick(filter)}>
        {filter}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {dropDown}
    </div>
  );
}

export default CategoryFilter;
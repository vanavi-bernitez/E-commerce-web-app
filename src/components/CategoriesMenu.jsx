import "../style/categoriesMenu.css";
import React from "react";

const CategoriesMenu = ({ setCategory }) => {
  const handleCategoryClick = (idCategory) => {
    setCategory(idCategory);
  };
  return (
    <div className="categoriesMenu">
      <ul>
        <li onClick={() => handleCategoryClick("category/electronics")}>
          Electronics
        </li>
        <li onClick={() => handleCategoryClick("category/jewelery")}>
          Jewelery
        </li>
        <li onClick={() => handleCategoryClick("category/men's%20clothing")}>
          Men's clothing
        </li>
        <li onClick={() => handleCategoryClick("category/women's%20clothing")}>
          Women's clothing
        </li>
      </ul>
    </div>
  );
};

export { CategoriesMenu };

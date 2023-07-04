import "../style/categories.css";
import { CategoriesTittle } from "./CategoriesTittle";
import { CategoriesMenu } from "./CategoriesMenu";
import React from "react";

const Categories = ({ setCategory }) => {
  return (
    <div className="categories">
      <CategoriesTittle />
      <CategoriesMenu setCategory={setCategory} />
    </div>
  );
};

export { Categories };

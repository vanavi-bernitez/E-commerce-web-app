import "../style/categories.css";
import { CategoriesTittle } from "./CategoriesTittle";
import { CategoriesMenu } from "./CategoriesMenu";
import React from "react";

const Categories = () => {
  return (
    <div className="categories">
      <CategoriesTittle />
      <CategoriesMenu />
    </div>
  );
};

export { Categories };

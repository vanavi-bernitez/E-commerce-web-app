import "./App.css";
import { HeaderMain } from "./components/HeaderMain";
import { HeaderMenu } from "./components/HeaderMenu";
import { Categories } from "./components/Categories";
import { Shop } from "./components/Shop";
import { About } from "./components/About";
import { fetchItems } from "./helpers/fetchItems";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const handleSetCategory = (idCategory) => {
    setCategory(idCategory);
  };

  const getProducts = async () => {
    try {
      const productsFetched = await fetchItems("");
      setProducts(productsFetched);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(category);

  return (
    <>
      <header>
        <HeaderMain />
        <HeaderMenu />
      </header>

      <Categories setCategory={handleSetCategory} />

      <Shop products={products} />

      <About />
    </>
  );
};

export default App;

import "./App.css";
import { HeaderMain } from "./components/HeaderMain";
import { HeaderMenu } from "./components/HeaderMenu";
import { Categories } from "./components/Categories";
import { Shop } from "./components/Shop";
import { About } from "./components/About";
import { ProductModal } from "./components/ProductModal";
import { fetchItems } from "./helpers/fetchItems";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({});
  const [isSeeMoreClicked, setIsSeeMoreClicked] = useState(false);

  const handleSetCategory = (idCategory) => {
    setCategory(idCategory);
  };

  const handleSetProduct = (idProduct) => {
    setProduct(idProduct);
  };

  const handleSetIsSeeMoreClicked = (isClicked) => {
    setIsSeeMoreClicked(isClicked);
  };

  const getProducts = async (categoryURL) => {
    try {
      const productsFetched = await fetchItems(categoryURL);
      //ternary is clicked true fetch productId

      setProducts(productsFetched);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  return (
    <>
      <header>
        <HeaderMain />
        <HeaderMenu />
      </header>

      <Categories setCategory={handleSetCategory} />

      <Shop
        products={products}
        setProduct={handleSetProduct}
        setIsSeeMoreClicked={handleSetIsSeeMoreClicked}
      />

      {isSeeMoreClicked && (
        <ProductModal
          product={product}
          setIsSeeMoreClicked={handleSetIsSeeMoreClicked}
        />
      )}

      <About />
    </>
  );
};

export default App;

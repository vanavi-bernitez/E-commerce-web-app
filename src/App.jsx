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
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({});
  const [isSeeMoreClicked, setIsSeeMoreClicked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleSetCategory = (idCategory) => {
    setCategory(idCategory);
  };

  const handleSetProduct = (idProduct) => {
    setProduct(idProduct);
  };

  const handleSetIsSeeMoreClicked = (isClicked) => {
    setIsSeeMoreClicked(isClicked);
  };

  const handleSetCartCount = (count) => {
    setCartCount(count);
  };

  const getProducts = async (categoryURL) => {
    try {
      const productsFetched = await fetchItems(categoryURL);

      setProducts(productsFetched);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  useEffect(() => {
    setAllProducts(products);
  }, []);

  console.log(allProducts);

  return (
    <>
      <header>
        <HeaderMain cartCount={cartCount} />
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
          setCartCount={handleSetCartCount}
        />
      )}

      <About />
    </>
  );
};

export default App;

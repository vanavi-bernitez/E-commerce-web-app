import "../style/productModal.css";
import React from "react";

const ProductModal = ({ product, setIsSeeMoreClicked, setCartCount }) => {
  const handleSeeMoreClick = () => {
    setIsSeeMoreClicked(false);
  };

  const handleAddClick = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  
  return (
    <div className="productModal">
      <button onClick={handleSeeMoreClick}>x</button>
      <div className="imgModalContainer">
        <img src={product.image} alt="e-commerce product" />
      </div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export { ProductModal };

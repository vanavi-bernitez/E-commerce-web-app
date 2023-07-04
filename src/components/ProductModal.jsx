import "../style/productModal.css";
import React from "react";

const ProductModal = ({ product, setIsSeeMoreClicked }) => {
  const handleSeeMoreClick = () => {
    setIsSeeMoreClicked(false);
  };
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <button onClick={handleSeeMoreClick}></button>
    </div>
  );
};

export { ProductModal };

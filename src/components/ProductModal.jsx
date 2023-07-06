import "../style/productModal.css";
import React from "react";
import ReactModal from "react-modal";

const ProductModal = ({
  product,
  setIsSeeMoreClicked,
  setCartCount,
  isSeeMoreClicked,
}) => {
  const handleSeeMoreClick = () => {
    setIsSeeMoreClicked(false);
  };

  const handleAddClick = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <ReactModal
      className="seeMoreModal"
      overlayClassName="overlaySeeMoreModal"
      isOpen={isSeeMoreClicked}
    >
      <button onClick={handleSeeMoreClick}>x</button>
      <div className="imgModalContainer">
        <img src={product.image} alt="e-commerce product" />
      </div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <button onClick={handleAddClick}>Add</button>
    </ReactModal>
  );
};

export { ProductModal };

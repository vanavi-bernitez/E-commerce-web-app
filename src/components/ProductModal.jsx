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
      isOpen={isSeeMoreClicked}
      onRequestClose={handleSeeMoreClick}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "2em",
          outline: "none",
          padding: "20px",
          width: "60vw",
          height: "50vh",
        },
      }}
    >
      <button onClick={handleSeeMoreClick}>x</button>
      <div className="productContainer">
        <div className="imgModalContainer">
          <img src={product.image} alt="e-commerce product" />
        </div>
        <div className="descriptionModalContainer">
          <h3>{product.title}</h3>
          <p className="rightAlign">{product.description}</p>
          <button className="rightAlign" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export { ProductModal };

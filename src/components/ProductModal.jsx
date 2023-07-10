import "../style/productModal.css";
import React, { useState } from "react";
import ReactModal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductModal = ({
  product,
  setIsSeeMoreClicked,
  setCartCount,
  isSeeMoreClicked,
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
          width: "50vw",
          height: "50vh",
          display: "grid",
          placeItems: "center",
        },
      }}
    >
      <div className="productContainer">
        <div className="imgModalContainer">
          <img src={product.image} alt="e-commerce product" />
        </div>
        <div className="descriptionModalContainer">
          <h3>{product.title}</h3>
          <p className=" productDescription">{product.description}</p>
          <div className="priceAdd">
            <p>$ {product.price}</p>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleAddClick}
            >
              {isHovered ? (
                <FontAwesomeIcon
                  icon={faCartShopping}
                  bounce
                  style={{ color: "#FFF" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#FFF" }}
                />
              )}
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="closeBtn">
        <button onClick={handleSeeMoreClick}>x</button>
      </div>
    </ReactModal>
  );
};

export { ProductModal };

import "../style/shop.css";
import React from "react";

const Shop = ({ products }) => {
  const storeItems = products.map((product) => {
    return (
      <div className="item" key={product.id}>
        <p>{product.title}</p>
      </div>
    );
  });
  return (
    <div className="shop" id="shopSection">
      {storeItems}
    </div>
  );
};

export { Shop };

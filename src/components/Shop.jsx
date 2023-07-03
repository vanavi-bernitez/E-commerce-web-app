import "../style/shop.css";

const Shop = ({ products }) => {
  const storeItems = products.map((product) => {
    const truncateText = (text) => {
      if (text.length <= 18) text;

      return text.slice(0, 18) + "...";
    };

    return (
      <div className="item" key={product.id}>
        <div className="imgContainer">
          <img src={product.image} alt="e-commerce product" />
        </div>
        <p>{truncateText(product.title)}</p>
        <p>$ {product.price}</p>
        <p>{product.rating.rate}</p>
        <div className="buttons">
          <button id="buy">Buy</button>
          <button id="seeMore">See More</button>
        </div>
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

import "../style/shop.css";
import moreDots from "../images/moreDots.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Shop = ({ products, setProduct, setIsSeeMoreClicked }) => {
  const storeItems = products.map((product) => {
    const truncateText = (text) => {
      if (text.length <= 25) text;
      return text.slice(0, 25) + "...";
    };

    let rateRounded;
    product.rating.rate - Math.floor(product.rating.rate) >= 0.5
      ? (rateRounded = Math.ceil(product.rating.rate))
      : (rateRounded = Math.floor(product.rating.rate));

    const rateStars = Array(rateRounded).fill(
      <FontAwesomeIcon icon={faStar} style={{ color: "rgb(186,88,31)" }} />
    );

    const handleSeeMoreClick = (product) => {
      setProduct(product);
      setIsSeeMoreClicked(true);
    };

    return (
      <div className="item" key={product.id}>
        <div
          className="imgContainer"
          onClick={() => handleSeeMoreClick(product)}
        >
          <img src={product.image} alt="e-commerce product" />
        </div>
        <p className="title">{truncateText(product.title)}</p>
        <div className="productContent">
          <div className="leftContent">
            <div className="rateStars">{rateStars}</div>
            <p>$ {product.price.toFixed(2)}</p>
          </div>
          <div className="rightContent">
            <button className="buyBtn">BUY</button>
          </div>
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

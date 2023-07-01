import "../style/headerMain.css";
import userImg from "../images/user.svg";
import searchImg from "../images/search.svg";
import cartImg from "../images/shopping-cart.svg";
import React from "react";

const HeaderMain = () => {
  return (
    <div className="headerMain" id="headerSection">
      <div className="headerLeft">
        <button>
          <img src={userImg} alt="user" />
        </button>
      </div>
      <div className="headerCenter">
        <p>cosso.</p>
      </div>
      <div className="headerRight">
        <button>
          <img src={searchImg} alt="search" />
        </button>
        <button>
          <img src={cartImg} alt="shop cart" />
        </button>
      </div>
    </div>
  );
};

export { HeaderMain };

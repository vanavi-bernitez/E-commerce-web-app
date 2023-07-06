import "../style/headerMain.css";
import userImg from "../images/user.svg";
import searchImg from "../images/search.svg";
import cartImg from "../images/shopping-cart.svg";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeaderMain = ({ cartCount }) => {
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
        <span className="cartLogo fa-layers fa-fw">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="xl"
            style={{ color: "#9f9f9f" }}
          />

          {cartCount > 0 && (
            <span
              className="fa-layers-counter fa-3x"
              style={{ background: "rgba(227,142,25,255)" }}
            >
              {cartCount}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export { HeaderMain };

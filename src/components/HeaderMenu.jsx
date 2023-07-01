import "../style/headerMenu.css";
import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <nav className="headerMenu">
      <ul>
        <li>
          <a href="#headerSection">Home</a>
        </li>
        <li>
          <a href="#shopSection">Shop</a>
        </li>
        <li>
          <a href="#aboutSection">About</a>
        </li>
      </ul>
    </nav>
  );
};

export { HeaderMenu };

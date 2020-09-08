import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="headre__logo"
        src="https://www.amazon.com/ref=nav_logo"
        alt=""
      ></img>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header__optionBasket"></div>
      </div>
    </div>
  );
}

export default Header;

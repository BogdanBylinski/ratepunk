import React, { useState } from "react";
import "../styles/_Navbar.scss";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import closed from "../assets/close.svg";

function Navbar() {
  const [active, setActive] = useState("closed");

  const navToggle = () => {
    active === "closed" ? setActive("opened") : setActive("closed");
  };

  return (
    <header>
      <div className="nav__wrapper">

      <nav className={`nav ${active}`}>
        <div className="nav__logo">
          <a href="#;">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <button
          type="button"
          className="btn__hamburger"
          onClick={() => navToggle()}
          data-action="nav-toggle"
        >
          <img src={active === "opened" ? closed : menu} alt="burger button" />
        </button>
        <ul className="nav__menu ">
          <li className="nav__menu_item ">
            <a className="active" href="#;">
              Chrome Extension
            </a>
          </li>
          <li className="nav__menu_item">
            <a href="#;">Price Comparison</a>
          </li>
          <li className="nav__menu_item">
            <a href="#;">Blog</a>
          </li>
        </ul>
      </nav>
      </div>

    </header>
  );
}

export default Navbar;

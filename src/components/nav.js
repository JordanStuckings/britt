import React from "react";
import { Link } from "gatsby";
import "./nav.css";

const Nav = () => {
  //all links toggle nav in case a user clicks on the current page
  const toggleNav = () => document.querySelector(".toggle-nav").click();

  return (
    <div className="navigation">
      <input className="toggle-nav" type="checkbox" name="" />
      <span></span>
      <span></span>
      <ul className="menu">
        <li>
          <Link onClick={toggleNav} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={toggleNav} to="/#portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link onClick={toggleNav} to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

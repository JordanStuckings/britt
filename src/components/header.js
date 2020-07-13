import React from "react";
import { Link } from "gatsby";
import Nav from "../components/nav.js";
import "./header.css";

const Header = () => (
  <header className="header">
    <Link to="/">Britt Clennett</Link>
    <Nav />
  </header>
);

export default Header;

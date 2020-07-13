import React from "react";
import PropTypes from "prop-types";

import "./banner.css";

const Banner = ({ children }) => (
  <section className="banner">{children}</section>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;

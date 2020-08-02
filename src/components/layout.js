import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Banner from "../components/banner";

import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Nav />
        <div style={{ minHeight: "80vh" }}>{children}</div>
        <Banner>
          <Footer />
        </Banner>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { StyledNavbar, StyledNavContainer } from "./styles";
export default () => {
  return (
    <StyledNavbar>
      <Navbar bg="light" expand="lg">
        <StyledNavContainer>
          <Navbar.Brand as={"div"}>
            <Link to={"/"}>Britt Clennett</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={"div"}>
              <Link to={"#portfolio"}>Portfolio</Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={"div"}>
              <Link to={"#contact"}>Contact</Link>
            </Nav.Link>
          </Nav>
        </StyledNavContainer>
      </Navbar>
    </StyledNavbar>
  );
};

import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: fixed !important;
  width: 100%;
  z-index: 1000;
  background-color: #d9e4cf;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05);
  height: 60px;
  padding: 0 16px !important;

  a {
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      color: rgba(0, 0, 0, 0.7);
      text-decoration: none;
    }
  }

  nav {
    background-color: #d9e4cf !important;
  }

  @media (min-width: 768px) {
    padding: 0 !important;
  }
`;

export const StyledNavContainer = styled.div`
  width: 100%;
  display: flex;
  @media (min-width: 800px) {
    max-width: 800px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

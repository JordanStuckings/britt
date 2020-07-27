import styled from "styled-components";

export const StyledHero = styled.header`
  position: relative;
  padding: 1rem;
  color: #333333;
  z-index: 0;
  max-width: 100rem;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 75px;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
`;


export const Summary = styled.div`
  display: grid;
  grid-auto-flow: row;

  margin-right: auto;
  text-align: left;
`;
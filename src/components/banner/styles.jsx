import styled from "styled-components";

const Banner = styled.section`
  width: 100%;
  height: auto;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media (min-width: 1200px) {
    display: flex;
    width: 100%;
    height: auto;
    margin: auto;
  }
  background-color: ${(props) => props.backgroundColor ?? "#ECF0E9"};
`;

export default Banner;

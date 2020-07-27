import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 555px;
  margin: auto;
  height: 800px;

  @media (max-width: 800px) {
    width: 100%;
    min-height: 600px;
    display: flex;
    justify-content: center;
    padding: 0;
    padding-top: 100px;
  }
`;

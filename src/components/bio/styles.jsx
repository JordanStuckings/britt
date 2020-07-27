import styled from "styled-components";

export const StyledBio = styled.section`
  text-align: justify;
  padding: 3rem 1rem 4rem 1rem;
  color: #333333;

  width: 100%;

  h2 {
    margin-bottom: 0.5rem;
    font-size: 3rem;
    margin-top: 0.2em;
    line-height: 1em;
    white-space: pre-wrap;
    text-align: justify;
  }

  p {
    margin-bottom: 2rem;
    margin: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    text-justify: auto;

    padding: 0;

    font-size: 22px;
    line-height: 1.33em;
  }

  p a {
    color: inherit;
  }

  @media (min-width: 800px) {
    max-width: 800px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

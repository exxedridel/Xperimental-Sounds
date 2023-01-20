import styled from "styled-components";

export const GridContainerStyled = styled.main`
  line-height: 1.6;
  font-style: italic;

  & article {
    grid-area: article;
  }

  & img {
    grid-area: image;
    height: 550px;
    width: 550px;
    object-fit: cover;
    margin-top: 2rem;
    margin-inline: auto;
  }

  @media (min-width: 58em) {
    display: grid;
    place-items: center;
    column-gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas: "article image";
    & img {
      min-height: 100%;
      min-width: 100%;
      margin-top: 0;
    }
  }
`;

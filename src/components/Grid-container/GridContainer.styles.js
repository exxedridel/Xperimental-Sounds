import styled from "styled-components";

export const GridContainerStyled = styled.main`
  & h2 {
    font-family: var(--ff-theseasons-lt);
    font-size: var(--fs-800);
  }

  & p {
    line-height: 1.6;
    /* font-style: italic; */
    font-size: var(--fs-600);
  }

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
    border-radius: 3px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.50);
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

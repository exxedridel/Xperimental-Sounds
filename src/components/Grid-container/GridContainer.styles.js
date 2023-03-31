import styled from "styled-components";
import incubadora from "@assets/incubadora-musical.jpg";

export const GridContainerStyled = styled.main`
  text-align: center;

  & h2 {
    font-family: var(--ff-theseasons-reg-full);
    font-size: var(--fs-800);
    
  }

  & p {
    line-height: 1.6;
    /* font-style: italic; */
    font-size: var(--fs-600);
    margin-top: 2rem;
  }

  & article {
    grid-area: article;
  }

  .div-xs-image {
    grid-area: image;
    display: flex;
    justify-content: right;
    height: 550px;
    max-width: 550px;
    margin-top: 3rem;
    margin-inline: auto;
    border-radius: 3px;
    background-size: cover;
    background-position: center center;
    background-image: url(${incubadora});
    filter: grayscale(50%);
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }

  .XS {
    padding: 1.5rem 2.25rem 0;
    font-family: var(--ff-theseasons-reg-full);
    font-size: 70px;
  }

  @media (min-width: 58em) {
    text-align: start;
    display: grid;
    place-items: center;
    column-gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas: "article image";
    .div-xs-image {
      min-height: 100%;
      min-width: 100%;
      margin-top: 0;
    }
  }
`;

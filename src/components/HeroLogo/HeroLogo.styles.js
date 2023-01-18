import styled from "styled-components";

export const HeroLogoStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  & > img {
    background-size: cover;
    width: 100%;
    height: 90vh;
    object-fit: cover;
    opacity: 1;
  }

  .overlaped {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-inline: 1rem;
  }

  .overlaped img {
    align-self: center;
    /* width: calc(300px + 5vmin); */
    width: clamp(260px, 40vw + 1rem, 380px);
    padding: 1.5em;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: inset 0px 0px 75px cyan;
  }

  .overlaped p {
    align-self: center;
    text-align: center;
    width: min-content;
    line-height: 1;
    margin: 7.5px;
    font-family: "Dela Gothic One", cursive;
    font-size: calc(30px + 2vmin);
    font-weight: 700;
    text-shadow: 5px 5px 5px #000000;
  }

  // * Tablet & Landscape *
  @media (min-width: 35em) {
    & > img {
      height: clamp(380px, 60vw, 752px);
    }
  }
  // * Desktop *
  @media (min-width: 58em) {
    & > img {
      height: 82.5vh;
    }
  }
`;

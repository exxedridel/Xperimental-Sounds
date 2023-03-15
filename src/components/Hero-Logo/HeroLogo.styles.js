import styled from "styled-components";

export const HeroLogoStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .bgColor {
    width: 100%;
    height: 70vh;
    background-color: hsl(var(--brand-yellow));
  }

  /* & > img {
    background-size: cover;
    width: 100%;
    height: 90vh;
    object-fit: cover;
    opacity: 1;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
  } */

  .overlaped {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-inline: 1rem;
    cursor: pointer;
  }

  .overlaped img {
    align-self: center;
    /* width: calc(300px + 5vmin); */
    width: clamp(260px, 35vw, 340px);
    padding: 0.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 0;
    /* box-shadow: inset 0px 0px 100px hsl(var(--glow-clr) / 0.9); */
  }

  .overlaped p {
    align-self: center;
    text-align: center;
    width: min-content;
    letter-spacing: 2px;
    line-height: 1.1;
    margin: 7.5px;
    font-family: "TheSeasons", sans-serif;
    font-size: calc(30px + 2vmin);
    font-weight: 500;
    color: hsl(var(--black));
  }
  .overlaped span {
    color: hsl(var(--brand-blue));
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

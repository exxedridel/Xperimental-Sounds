import styled from "styled-components";

export const HeroLogoStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    background-size: cover;
    width: 100%;
    height: 90vh;
    object-fit: cover;
    opacity: 1;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
  }

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
    padding: 1.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 0;
    box-shadow: inset 0px 0px 100px hsl(var(--glow-clr) / 0.9);
  }

  .overlaped p {
    align-self: center;
    text-align: center;
    width: min-content;
    letter-spacing: 0px;
    line-height: 0.925;
    margin: 7.5px;
    font-family: "Dela Gothic One", cursive;
    font-size: calc(30px + 2vmin);
    font-weight: 700;
    color: hsl(var(--white));
    text-shadow: 0px 0px 1px grey, 0px 0px 6px hsl(var(--glow-clr));
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

import styled from "styled-components";

export const HeroLogoStyled = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Open+Sans:wght@300;400;500;600;700&family=Raleway:wght@300;400;500&display=swap");

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    width: 100%;
    height: 80vh;
    background-color: hsl(var(--brand-yellow) /0.5);
  }

  & > img {
    background-size: cover;
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
    /* width: clamp(230px, 35vw, 340px); */
    padding: 0.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 0;
    /* box-shadow: inset 0px 0px 100px hsl(var(--glow-clr) / 0.9); */
  }

  .brand-name {
    align-self: center;
    text-align: center;
    width: min-content;
    letter-spacing: 4px;
    line-height: 1.1;
    /* line-height: 1.7; */
    margin: 7.5px;
    font-family: "TheSeasons", sans-serif;
    font-size: calc(2.8rem + 2vmin);
    font-weight: 600;
    color: hsl(var(--black));
  }
  .brand-name span {
    color: hsl(var(--black));
    /* font-weight: 600; */
  }
  /* .setapps {
    align-self: center;
    text-align: center;
    font-size: calc(50px + 2vmin);
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    color: hsl(var(--white));
    letter-spacing: 1px;
  } */

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

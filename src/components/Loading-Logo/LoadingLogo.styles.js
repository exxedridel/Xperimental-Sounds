import styled from "styled-components";

export const LoadingLogoStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    display: flex;
    justify-content: center;
  }

  .background {
    width: 100%;
    height: 100vh;
    background-color: whitesmoke;
    background-size: cover;
    object-fit: cover;
    opacity: 1;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    padding-block: 0.5rem;
  }

  .overlaped {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-inline: 1rem;
    cursor: pointer;
  }
  .brand-logo {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .overlaped img {
    width: 200px;
    /* aspect-ratio: 1;
    border-radius: 50%; */
    /* box-shadow: 2px 2px 18px hsl(var(--black) / 0.7); */
  }

  .brand-name {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .brand-name p {
    align-self: center;
    text-align: center;
    width: min-content;
    letter-spacing: 2px;
    line-height: 1.1;
    margin: 7.5px;
    font-family: var(--ff-burial);
    font-size: var(--fs-900);
    font-weight: 500;
    color: hsl(var(--black));
    text-shadow: 4px 4px hsl(var(--black) / 0.27);
  }
  .brand-name span {
    color: hsl(var(--black));
  }

  // * Tablet & Landscape *
  @media (min-width: 35em) {
    .loader {
      justify-content: start;
      margin-left: 10px;
    }

    .overlaped {
      flex-direction: row;
      margin-inline: 0rem;
      gap: 1rem;
      & img {
        width: clamp(160px, 25vw, 180px);
      }
    }

    .background {
      /* height: 450px; */
      height: 100vh;
    }

    .brand-name p {
      letter-spacing: 3px;
      text-align: start;
    }
  }
  // * Desktop *
  @media (min-width: 58em) {
    .overlaped {
      flex-direction: row;
      margin-inline: 0rem;
      gap: 3rem;
      & img {
        width: clamp(200px, 35vw, 250px);
      }
    }
    .background {
      height: 100vh;
    }

    .brand-name p {
      letter-spacing: 4px;
    }
  }
`;

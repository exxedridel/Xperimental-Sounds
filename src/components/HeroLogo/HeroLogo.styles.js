import styled from "styled-components";
import BgStudioX from "../../assets/studio-xperimental.jpg";

export const HeroLogoStyled = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  bacground-size: cover; // no effect
  background-position: center center;
  background-image: url(${BgStudioX});

  .logo {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding-inline: 1rem;
    padding-block: 2.5rem;
  }
`;

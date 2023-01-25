import React from "react";
import { HeroLogoStyled } from "./HeroLogo.styles";
import BgStudioX from "@assets/audio-studio.webp";
import Logo from "@assets/XSounds-logo-circle.svg";

const HeroLogo = () => {
  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
  }

  return (
    <HeroLogoStyled>
      <img src={BgStudioX} alt="Music Studio" />
      <div onClick={scrollToContent} className="overlaped">
        <img className="logo" src={Logo} alt="Logo Xperimental Sounds" />
        <p>Xperimental Sounds</p>
      </div>
    </HeroLogoStyled>
  );
};

export default HeroLogo;

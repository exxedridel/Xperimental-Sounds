import React from "react";
import { HeroLogoStyled } from "./HeroLogo.styles";
import BgStudioX from "../../assets/audio-studio.webp";
import Logo from "../../assets/SoloX.svg";

const HeroLogo = () => {
  return (
    <HeroLogoStyled>
      <img src={BgStudioX} alt="Music Studio" />
      <div className="overlaped">
        <img className="logo" src={Logo} alt="Logo Xperimental Sounds" />
        <p>Xperimental Sounds</p>
      </div>
    </HeroLogoStyled>
  );
};

export default HeroLogo;

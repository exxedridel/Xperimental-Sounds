import React from "react";
import { HeroLogoStyled } from "./HeroLogo.styles";
import Logo from "../../assets/SoloX.svg";

const HeroLogo = () => {
  return (
    <HeroLogoStyled>
      <div className="logo">
        <img src={Logo} alt="Logo Xperimental Sounds" />
      </div>
    </HeroLogoStyled>
  );
};

export default HeroLogo;

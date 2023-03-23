import React from "react";
import { HeroLogoStyled } from "./HeroLogo.styles";
import Background from "@assets/bg-xs.svg";
import Logo from "@assets/xperimental-sounds-logo.png";

const HeroLogo = () => {
  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
  }

  return (
    <HeroLogoStyled>
      <img className="background" src={Background} alt="beats yellow" />
      <div onClick={scrollToContent} className="overlaped">
        <img className="logo" src={Logo} alt="Logo Xperimental Sounds" />
        <p className="brand-name">Xperimental <span>Sounds</span></p>
        {/* <p className="setapps">Set<b>apps</b></p>
        <p className="brand-name">En español <span>fase 1</span></p> */}
      </div>
    </HeroLogoStyled>
  );
};

export default HeroLogo;

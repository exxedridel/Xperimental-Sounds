import React from "react";
import { Fade, Flip } from "react-awesome-reveal";
import { HeroLogoStyled } from "./HeroLogo.styles";
import Background from "@assets/bg-xs.svg";
import Logo from "@assets/xs-circle-final.svg";

const HeroLogo = () => {
  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
  }

  return (
    <HeroLogoStyled>
      <img className="background" src={Background} alt="beats yellow" />
      <div onClick={scrollToContent} className="overlaped">
        <Flip className="brand-logo">
          <img src={Logo} alt="Logo Xperimental Sounds" />
        </Flip>
        <Fade delay={1e3} className="brand-name">
          <p>
            Xperimental <span>Sounds</span>
          </p>
        </Fade>
        {/* <p className="setapps">Set<b>apps</b></p>
        <p className="brand-name">En español <span>fase 1</span></p> */}
      </div>
    </HeroLogoStyled>
  );
};

export default HeroLogo;

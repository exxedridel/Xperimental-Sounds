import React from "react";
import { FlexLinksStyled } from "./FlexLinks.styles";
import incubatorIcon from "@assets/cd.png";
import productionIcon from "@assets/record.png";
import liveBandIcon from "@assets/live.png";
import personalBeatsIcon from "@assets/production.png";

const FlexLinks = () => {
  return (
    <FlexLinksStyled>
      <a href="#incubadora" className="incubadora link">
        <div className="div-icon">
          <img src={incubatorIcon} alt="icon" />
        </div>
        <div className="div-span">
          <span>Incubadora Musical</span>
        </div>
      </a>
      <a href="#negocios" className="business link">
        <div className="div-icon">
          <img src={productionIcon} alt="icon" />
        </div>
        <div className="div-span">
          <span>Audio Empresarial y de Negocios</span>
        </div>
      </a>
      <a href="#personal-beats" className="own-beats link">
        <div className="div-icon">
          <img src={personalBeatsIcon} alt="icon" />
        </div>
        <div className="div-span">
          <span>Bases Musicales Personalizadas</span>
        </div>
      </a>
      <a href="#live-band" className="live-band link">
        <div className="div-icon">
          <img src={liveBandIcon} alt="icon" />
        </div>
        <div className="div-span">
          <span>Athoxa Live Band</span>
        </div>
      </a>
    </FlexLinksStyled>
  );
};

export default FlexLinks;

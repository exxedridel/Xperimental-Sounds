import React from "react";
import { FlexLinksStyled } from "./FlexLinks.styles";
import productionIcon from "../../assets/production-icon.png";

const FlexLinks = () => {
  return (
    <FlexLinksStyled>
      <a className="business link">
        <div className="div-icon">
          <img src={productionIcon} alt="icon" />
        </div>
        <div className="div-span">
          <span>business</span>
        </div>
      </a>
      <a className="live-band link">
        <div className="div-icon">
          <img src={productionIcon} alt="icon" />
        </div>
        <div className="div-span">
          <span>Athoxa Live Band</span>
        </div>
      </a>
      <a className="own-beats link">
        <div className="div-icon">
          <img src={productionIcon} alt="icon" />
        </div>
        <div className="div-span">
          <span>Bases musicales personalizadas</span>
        </div>
      </a>
    </FlexLinksStyled>
  );
};

export default FlexLinks;

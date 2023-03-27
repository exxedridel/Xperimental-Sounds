import React from "react";
import { FooterStyled } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled className="flex-center fs-200 box-shadow">
      <p>
        © Copyright <b className="xs-brand">Xperimental Sounds</b> 2023. Todos los derechos reservados.
        <br />
        <a href="https://setapps.co" className="setapps">Set<b>apps</b>™ Originals</a>
      </p>
    </FooterStyled>
  );
};

export default Footer;

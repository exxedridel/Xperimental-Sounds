import React from "react";
import { FooterStyled } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled className="flex-center fs-200">
      <p>
        © Copyright Xperimental Sounds 2023. Todos los derechos reservados.
        <br />
        Setapps™ Originals
      </p>
    </FooterStyled>
  );
};

export default Footer;

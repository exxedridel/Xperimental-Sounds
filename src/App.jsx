import React from "react";
import HeroLogo from "./components/Hero-Logo/HeroLogo";
import GridContainer from "./components/Grid-container/GridContainer";
import FlexCards from "./components/Flex-cards/FlexCards";
import AccordionBS from "./components/Accordion-BS/AccordionBS";
import Footer from "./components/Footer-simple/Footer";
import facebook from "@assets/facebook.png";
import youtube from "@assets/youtube.png";
import whatsapp from "@assets/whatsapp.png";
import instagram from "@assets/instagram.png";
import { FixedButton } from "./styles/FixedButton.styles";
import whatsappColor from "@assets/whatsapp-color.png";
import "./styles/global.css";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <div className="flow">
        <HeroLogo />
        <div id="main-content" className="container flex-center text-centered">
          <h1 className="uppercase fs-900">Casa Productora</h1>
          <div className="hr-div"></div>
          <h1 className="uppercase fs-900">Incubadora musical</h1>
          {/* <p className="uppercase text-accent ff-sans-cond letter-spacing-3">
            León Gto, México
          </p> */}
        </div>

        <div className="container">
          <GridContainer />
        </div>
        <div>
          <FlexCards />
        </div>

        <div className="container flow">
          <div className="flex-center text-centered">
            <h2 className="uppercase ff-sans-cond letter-spacing-3">
              Preguntas frecuentes
            </h2>
            <div
              style={{ borderBottom: "1px solid white", width: "100px" }}
            ></div>
          </div>
          <AccordionBS />
        </div>

        <div id="contact-sect" className="container">
          <div className="flex-center text-centered">
            <h2 className="uppercase ff-sans-cond letter-spacing-3">
              Contáctanos
            </h2>
            <div className="hr-contact"
              style={{ borderBottom: "1px solid white", width: "100px" }}
            ></div>
            <a href="/">
              <img src={whatsapp} className="opaque-img" alt="whatsapp logo" />
            </a>
            <p>Síguenos en nuestras redes:</p>
            <div className="flex">
              <a href="/">
                <img
                  src={facebook}
                  className="opaque-img"
                  style={{ height: "56px", width: "56px" }}
                  alt="facebook logo"
                />
              </a>
              <a href="/">
                <img
                  className="opaque-img"
                  src={youtube}
                  style={{ height: "56px", width: "56px" }}
                  alt="youtube logo"
                />
              </a>
              <a href="/">
                <img
                  className="opaque-img"
                  src={instagram}
                  style={{ height: "56px", width: "56px" }}
                  alt="instagram logo"
                />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <a href="/">
        <FixedButton
          src={whatsappColor}
          className="opaque-img"
          alt="whatsapp logo"
        ></FixedButton>
      </a>
    </>
  );
};

export default App;

import React from "react";
import "./styles/global.css";
import HeroLogo from "./components/Hero-Logo/HeroLogo";
import GridContainer from "./components/Grid-container/GridContainer";
import FlexCards from "./components/Flex-cards/FlexCards";
import AccordionBS from "./components/Accordion-BS/AccordionBS";
import Footer from "./components/Footer-simple/Footer";
import facebook from "@assets/facebook.png";
import youtube from "@assets/youtube.png";
import whatsapp from "@assets/whatsapp.png";

const App = () => {
  return (
    <div className="flow">
      <HeroLogo />
      <div className="container flex-center text-centered">
        <h1 className="uppercase fs-900">
          Casa productora
          <br />
          incubadora musical
        </h1>
        <div style={{ borderBottom: "1px solid white", width: "100px" }}></div>
        <p className="uppercase text-accent ff-sans-cond letter-spacing-3">
          León, Guanajuato, México
        </p>
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
      <div className="container">
        <div className="flex-center text-centered">
          <h2 className="uppercase ff-sans-cond letter-spacing-3">
            Contáctanos
          </h2>
          <div
            style={{ borderBottom: "1px solid white", width: "100px" }}
          ></div>
          <img src={whatsapp} alt="whatsapp logo" />
          <p>También encuéntranos es nuestras redes:</p>
          <div className="flex">
            <img
              src={facebook}
              style={{ height: "56px", width: "56px" }}
              alt="facebook logo"
            />
            <img
              src={youtube}
              style={{ height: "56px", width: "56px" }}
              alt="youtube logo"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import "./styles/global.css";
import HeroLogo from "./components/Hero-Logo/HeroLogo";
import GridContainer from "./components/Grid-container/GridContainer";
import FlexCards from "./components/Flex-cards/FlexCards";
import AccordionBS from "./components/Accordion-BS/AccordionBS";

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
          <h2 className="uppercase ff-sans-cond letter-spacing-3 text-centered">
            Preguntas frecuentes
          </h2>
          <div style={{ borderBottom: "1px solid white", width: "100px" }}></div>
        </div>

        <AccordionBS />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;

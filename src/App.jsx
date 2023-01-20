import React from "react";
import "./styles/global.css";
import HeroLogo from "./components/Hero-Logo/HeroLogo";
import GridContainer from "./components/Grid-container/GridContainer";
import FlexCards from "./components/Flex-cards/FlexCards";

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
        <p className="text-accent">León, Guanajuato, México</p>
      </div>
      <div className="container">
        <GridContainer />
      </div>
      <div>
        <FlexCards />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;

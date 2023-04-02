import React, { useEffect, useState } from "react";
import { Fade, Flip, Rotate } from "react-awesome-reveal";
import LoadingLogo from "./components/Loading-Logo/LoadingLogo";
import GridContainer from "./components/Grid-container/GridContainer";
import FlexCards from "./components/Flex-cards/FlexCards";
import FlexLinks from "./components/Flex-links/FlexLinks";
import Footer from "./components/Footer-simple/Footer";
import wavy from "@assets/wavy-dark-ptrn.jpg";
import logo from "@assets/xs-circle-final.svg";
import facebook from "@assets/facebook.png";
import youtube from "@assets/youtube.png";
import whatsapp from "@assets/whatsapp.png";
import instagram from "@assets/instagram.png";
import whatsappColor from "@assets/whatsapp-color.png";
import { FixedButton } from "./styles/FixedButton.styles";
import "./styles/global.css";
import "./styles/App.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const heroBackground = {
    backgroundImage: `url(${wavy})`,
  };

  return (
    <>
      {loading ? (
        <LoadingLogo />
      ) : (
        <>
          <div className="App flow">
            <a
              id="main-content"
              href="#about"
              className="container flex-center-small"
              style={heroBackground}
            >
              <h1 className="fs-900">Estudio de Producción</h1>
              <div className="title-div"></div>
              <h1 className="second-title fs-900">Incubadora Musical</h1>
              <Fade
                duration="450"
                cascade
                damping={1e-1}
                className="logo-text text-accent"
              >
                Xperimental Sounds
              </Fade>
              <Rotate delay={500} duration="1500">
                <img
                  className="logo"
                  src={logo}
                  alt="Xperimental Sounds logo"
                />
              </Rotate>
              <Fade delay={1400} className="by-text text-accent uppercase">
                <p>Por Pablo Palomares</p>
              </Fade>
            </a>
            <div className="container flow-normal">
              <div className="flex-center text-centered">
                <h2 className="subtitle letter-spacing-3">
                  Nuestros Servicios:
                </h2>
                <div className="hr-div"></div>
              </div>
              <FlexLinks />
            </div>

            <div id="about" className="container">
              <GridContainer />
            </div>

            <div className="container">
              <FlexCards />
            </div>

            <div className="container flow-normal">
              <div className="flex-center text-centered">
                <Fade>
                  <h2 className="subtitle letter-spacing-3">
                    Ubicados en Guanajuato, México
                  </h2>
                </Fade>
                <div className="hr-div"></div>
              </div>
              {/* <AccordionBS /> */}
              <p className="call-to-contact fs-500 text-centered">
                Si tienes cualquier duda puedes mandarnos un mensaje a nuestro
                Whatsapp sin ningún compromiso, también puedes conocer más de
                nuestro trabajo a través de nuestas redes sociales.
              </p>
            </div>

            <div id="contact-sect" className="container">
              <div className="flex-center text-centered">
                <Fade>
                  <h2 className="subtitle letter-spacing-3">Contáctanos</h2>
                </Fade>
                <div className="hr-contact"></div>
                <a href="/">
                  <Flip duration="2000">
                    <img
                      src={whatsapp}
                      className="opaque-img"
                      alt="whatsapp logo"
                    />
                  </Flip>
                </a>
                <p>Síguenos en nuestras redes:</p>
                <div className="flex">
                  <a href="/">
                    <img
                      src={facebook}
                      className="opaque-img"
                      style={{ height: "48px", width: "48px" }}
                      alt="facebook logo"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="opaque-img"
                      src={youtube}
                      style={{ height: "48px", width: "48px" }}
                      alt="youtube logo"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="opaque-img"
                      src={instagram}
                      style={{ height: "48px", width: "48px" }}
                      alt="instagram logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <a href="/">
            <div className="whatsapp-btn">
              <FixedButton
                className="opaque-img"
                src={whatsappColor}
                alt="whatsapp logo"
              />
            </div>
          </a>
        </>
      )}
    </>
  );
};

export default App;

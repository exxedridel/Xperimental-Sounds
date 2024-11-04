import React, { useEffect, useState } from "react";
import { Fade, Flip, Rotate } from "react-awesome-reveal";
// import LoadingLogo from "./components/Loading-Logo/LoadingLogo";
import GridContainer from "./components/Grid-container/GridContainer";
import FlexCards from "./components/Flex-cards/FlexCards";
import FlexLinks from "./components/Flex-links/FlexLinks";
import Footer from "./components/Footer-simple/Footer";
// import wavy from "@assets/wavy-dark-ptrn.jpg";
import heroBg from "@assets/hero-bg.jpg";
// import logo from "@assets/xs-circle-final.svg";
import logo from "@assets/logo-experimental-sounds.png";
import facebook from "@assets/facebook.png";
import youtube from "@assets/youtube.png";
import whatsapp from "@assets/whatsapp.png";
import mail from "@assets/correo-electronico.png";
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
    backgroundImage: `url(${heroBg})`,
  };

  return (
    <>
      {/* {loading ? (
        <LoadingLogo />
      ) : ( */}
      <>
        <div className="App flow">
          <a
            id="main-content"
            href="#about"
            className="hero grid-center"
            style={heroBackground}
          >
            <div>
              <Fade triggerOnce="true" duration="1000">
                <img
                  className="logo"
                  src={logo}
                  alt="Xperimental Sounds logo"
                />
              </Fade>
              <div className="hero-btn">
                <button className="btn">Conócenos</button>
              </div>
            </div>
          </a>
          <div className="container flow-normal">
            <div className="flex-center text-centered">
              <h2 className="subtitle">Nuestros Servicios:</h2>
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
                <h2 className="subtitle">Ubicados en Guanajuato, México</h2>
              </Fade>
              <div className="hr-div"></div>
            </div>
            {/* <AccordionBS /> */}
            <div className="call-to-contact">
              <h4 className="text-centered fs-700">
                Todos nuestros servicios incluyen:
              </h4>
              <br />
              <ul className="fs-500">
                <li>Atención personalizada vía Zoom/Discord.</li>
                <li>
                  Respuesta rápida para aclaraciones o correciones por medio de
                  llamada telefónica, Whats app, Telegram o iMessage.
                </li>
                <li>
                  Mezcla y master digital. (No aplica para Athoxa Live Band).
                </li>
              </ul>
            </div>
          </div>

          <div id="contact-sect" className="container">
            <div className="flex-center text-centered">
              <Fade>
                <h2 className="subtitle">Contáctanos</h2>
                <a href="tel:+524463873213"  className="link">446-387-3213</a>
              </Fade>
              <div className="hr-contact"></div>
              <div className="flex-row-esta">
                <a href="http://wa.me/524463873213">
                  <Flip duration="2000">
                    <img
                      src={whatsapp}
                      className="opaque-img"
                      style={{ height: "48px", width: "48px" }}
                      alt="whatsapp logo"
                    />
                  </Flip>
                </a>
                <a href="mailto:contacto@xperimentalsounds.com">
                  <Flip duration="2000">
                    <img
                      className="opaque-img"
                      src={mail}
                      style={{ height: "48px", width: "48px" }}
                      alt="instagram logo"
                    />
                  </Flip>
                </a>
              </div>

              <p className="fs-500">Síguenos en nuestras redes:</p>
              <div className="flex">
                <a href="https://www.facebook.com/profile.php?id=100091305495109">
                  <img
                    src={facebook}
                    className="opaque-img"
                    style={{ height: "48px", width: "48px" }}
                    alt="facebook logo"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UC2puKYEes15af-qH8kPO3lw/?sub_confirmation=1">
                  <img
                    className="opaque-img"
                    src={youtube}
                    style={{ height: "48px", width: "48px" }}
                    alt="youtube logo"
                  />
                </a>
                <a href="https://www.instagram.com/xperimentalsounds/">
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
        <a href="http://wa.me/524463873213">
          <div className="whatsapp-btn">
            <FixedButton
              className="opaque-img"
              src={whatsappColor}
              alt="whatsapp logo"
            />
          </div>
        </a>
      </>
      {/* )} */}
    </>
  );
};

export default App;

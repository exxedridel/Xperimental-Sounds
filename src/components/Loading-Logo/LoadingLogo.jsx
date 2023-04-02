import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { Fade, Flip } from "react-awesome-reveal";
import { LoadingLogoStyled } from "./LoadingLogo.styles";
import Background from "@assets/bg-xs.svg";
import Logo from "@assets/xs-circle-final2.svg";

const LoadingLogo = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <LoadingLogoStyled>
      <img className="background" src={Background} alt="beats yellow" />
      <div className="overlaped">
        <Flip className="brand-logo">
          <img src={Logo} alt="Logo Xperimental Sounds" />
        </Flip>
        <div>
          <Fade delay={1e3} className="brand-name">
            <p>
              Xperimental <span>Sounds</span>
            </p>
          </Fade>
          <div className="loader">
            <BarLoader
              color={"#002233"}
              loading={loading}
              width={175}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      </div>
    </LoadingLogoStyled>
  );
};

export default LoadingLogo;

import React from "react";
import { FlexCardsStyled } from "./FlexCards.styles";
import productionIcon from "@assets/production-icon.png";
import negocios from "@assets/negocios.jpg";
import liveBand from "@assets/live-band.jpg";
import ownBeats from "@assets/beats-personalizados.jpg";

const FlexCards = () => {
  function scrollToContact() {
    const element = document.getElementById("contact-sect");
    element.scrollIntoView();
  }

  return (
    <FlexCardsStyled className="box-shadow">
      <article onClick={scrollToContact} className="card">
        <img className="img-card" src={negocios} alt="contact card" />
        <div className="icon-production">
          <img src={productionIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3 className="uppercase ff-sans-cond letter-spacing-3">Negocios</h3>
          <p>
            En el área de producción de audio empresarial y de negocios
            llevaremos a tu negocio al siguiente nivel. Ofrecemos música para
            comerciales de radio o T.V., spots, redes sociales o cualquier
            mercado al que quieras llegar. No importa que tan pequeño o grande
            sea tu proyecto, nuestro equipo te acompañara en todo el proceso.
          </p>
        </div>
      </article>
      <article onClick={scrollToContact} className="card">
        <img className="img-card" src={liveBand} alt="contact card" />
        <div className="icon-production">
          <img src={productionIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3 className="uppercase ff-sans-cond letter-spacing-3">
            Athoxa Live Band
          </h3>
          <p>
            Si tienes un proyecto musical y te faltan músicos de calidad para
            llevar tu interpretación al siguiente nivel nuestra Live Band te
            puede ayudar. Contamos con los mejores músicos de la región.
          </p>
        </div>
      </article>
      <article onClick={scrollToContact} className="card">
        <img
          className="img-card"
          src={ownBeats}
          alt="contact card"
        />
        <div className="icon-production">
          <img src={productionIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3 className="uppercase ff-sans-cond letter-spacing-3">
            Bases musicales personalizadas (beats)
          </h3>
          <p>
            ¿Estas harto de practicar tus con música/beats de uso compartido en
            YouTube? Nosotros podemos componer una base personalizada para que
            lleves tus presentaciones al máximo nivel de calidad. Contamos con
            instrumentales de todos géneros.
          </p>
        </div>
      </article>
    </FlexCardsStyled>
  );
};

export default FlexCards;

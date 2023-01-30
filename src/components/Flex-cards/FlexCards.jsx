import React from "react";
import { FlexCardsStyled } from "./FlexCards.styles";
import productionIcon from "@assets/production-icon.png";

const FlexCards = () => {
  function scrollToContact() {
    const element = document.getElementById("contact-sect");
    element.scrollIntoView();
  }

  return (
    <FlexCardsStyled className="box-shadow">
      <article onClick={scrollToContact} className="card">
        <img
          className="img-production"
          src="https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="contact card"
        />
        <div className="icon-production">
          <img src={productionIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3 className="uppercase ff-sans-cond letter-spacing-3">Negocios</h3>
          <p>
            En el área de producción de audio empresarial y de negocios
            llevaremos a tu negocio al siguiente nivel. Ofrecemosmúsicapara
            comerciales de radio o T.V., spots,redes sociales o cualquier
            mercado al que quieras llegar. No importa que tan pequeño o grande
            sea tu proyecto, nuestro equipo te acompañara en todo el proceso.
          </p>
        </div>
      </article>
      <article onClick={scrollToContact} className="card">
        <img
          className="img-production"
          src="https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="contact card"
        />
        <div className="icon-production">
          <img src={productionIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3 className="uppercase ff-sans-cond letter-spacing-3">
            Athoxa Live Band
          </h3>
          <p>
            Si tienes un proyecto musical y te faltan músicos de calidad para
            llevar tu interpretación al siguiente nivelnuestra Live Band te
            puede ayudar. Contamos con los mejores músicos de la región.
          </p>
        </div>
      </article>
      <article onClick={scrollToContact} className="card">
        <img
          className="img-production"
          src="https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus accusantium a perferendis, cumque ab totam ea,
            repudiandae minima odit porro fugiat. Accusantium tempora iusto
            quibusdam delectus porro voluptatem sequi quas, earum nesciunt omnis
            exercitationem eligendi? Commodi porro et.
          </p>
        </div>
      </article>
    </FlexCardsStyled>
  );
};

export default FlexCards;

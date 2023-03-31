import React from "react";
import { FlexCardsStyled } from "./FlexCards.styles";
import incubatorIcon from "@assets/cd.png";
import productionIcon from "@assets/record.png";
import liveBandIcon from "@assets/live.png";
import personalBeatsIcon from "@assets/production.png";
import incubadora from "@assets/incubadora.jpg";
import negocios from "@assets/negocios.jpg";
import liveBand from "@assets/live-band-contrast.jpg";
import ownBeats from "@assets/beats-personalizados.jpg";

const FlexCards = () => {
  function scrollToContact() {
    const element = document.getElementById("contact-sect");
    element.scrollIntoView();
  }

  return (
    <FlexCardsStyled className="box-shadow">
      <article id="incubadora" onClick={scrollToContact} className="card">
        <img className="img-card" src={incubadora} alt="contact card" />
        <div className="icon-production">
          <img src={incubatorIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3>Incubadora Musical</h3>
          <p>
            En nuestra incubadora musical te podemos ayudar a aterrizar tu
            proyecto como artista. Nuestros compositores te ayudarán en todo el
            proceso que conlleva crear desde un tema hasta un álbum completo.
            Todas las creaciones tienen un público y sin importar el género que
            te interese producir nosotros podemos impulsarte.
          </p>
          <div className="flex-center">
            <button className="schedule-btn">Agendar Cita</button>
          </div>
        </div>
      </article>
      <article id="negocios" onClick={scrollToContact} className="card">
        <img className="img-card" src={negocios} alt="contact card" />
        <div className="icon-production">
          <img src={productionIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3>Música para empresas</h3>
          <p>
            En el área de producción de audio empresarial y de negocios
            llevaremos a tu negocio al siguiente nivel. Ofrecemos música para
            comerciales de radio o TV, spots, redes sociales o cualquier mercado
            al que quieras llegar. No importa que tan pequeño o grande sea tu
            proyecto, nuestro equipo puede darle proyección a tu mensaje.
          </p>
          <div className="flex-center">
            <button className="schedule-btn">Agendar Cita</button>
          </div>
        </div>
      </article>
      <article id="personal-beats" onClick={scrollToContact} className="card">
        <img className="img-card" src={ownBeats} alt="contact card" />
        <div className="icon-production">
          <img src={personalBeatsIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3>BEATS Personalizados</h3>
          <p>
            ¿Estas harto de practicar tus barras con música/beats de uso
            compartido en YouTube? ¡Añádeles tu propia personalidad! nosotros
            podemos componer bases personalizadas para que verdaderamente
            impactes en tus presentaciones con el máximo nivel de calidad.
            Contamos con instrumentales de todos géneros.
          </p>
          <div className="flex-center">
            <button className="schedule-btn">Agendar Cita</button>
          </div>
        </div>
      </article>
      <article id="live-band" onClick={scrollToContact} className="card">
        <img className="img-card" src={liveBand} alt="contact card" />
        <div className="icon-production">
          <img src={liveBandIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3>Athoxa Live Band</h3>
          <p>
            Si ya realizas presentaciones pero te faltan músicos de calidad para
            llevar tu interpretación al siguiente nivel, nuestra{" "}
            <i>Athoxa Live Band</i> te puede asistir ya que contamos con los
            mejores músicos de la región dispuestos a llevar a buen término tu
            presentación ideal de manera rápida, eficiente y profesional ya sea
            temporal o consistentemente.
          </p>
          <div className="flex-center">
            <button className="schedule-btn">Agendar Cita</button>
          </div>
        </div>
      </article>
    </FlexCardsStyled>
  );
};

export default FlexCards;

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
            En nuestra incubadora musical te podremos ayudar a aterrizar tu
            proyecto como artista. Nuestros compositores te ayudarán en todo el
            proceso que conlleva crear desde un tema hasta un álbum completo.
            Todo talento tiene un público, y nosotros tenemos experiencia con
            cualquier género musical que te interese interpretar.
          </p>
          <div className="flex-center">
            <a href="/">
              <button className="schedule-btn">Agendar Cita</button>
            </a>
          </div>
        </div>
      </article>
      <article id="negocios" onClick={scrollToContact} className="card">
        <img className="img-card" src={negocios} alt="contact card" />
        <div className="icon-production">
          <img src={productionIcon} alt="production icon" />
        </div>
        <div className="info fs-300">
          <h3>Audio Para Empresas</h3>
          <p>
            En el área de producción de audio para empresas y negocios te
            ofrecemos música para comerciales de radio o TV (spots), redes
            sociales o para cualquier campaña publicitaria que quieras realizar.
            No importa que tan pequeño o grande sea el proyecto, nuestro equipo
            de composición puede darle la proyección que tu mensaje requiera.
          </p>
          <div className="flex-center">
            <a href="/">
              <button className="schedule-btn">Agendar Cita</button>
            </a>
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
            <a href="/">
              <button className="schedule-btn">Agendar Cita</button>
            </a>
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
            Si ya realizas presentaciones pero te faltan músicos para llevar tu
            interpretación al siguiente nivel, nuestra <i>Athoxa Live Band</i>{" "}
            te puede asistir, contamos con músicos instruidos en las mejores
            universidades del país para llevar tu presentación a buen término de
            manera eficiente y profesional, ya sea ocasional o consistentemente.
          </p>
          <div className="flex-center">
            <a href="/">
              <button className="schedule-btn">Agendar Cita</button>
            </a>
          </div>
        </div>
      </article>
    </FlexCardsStyled>
  );
};

export default FlexCards;

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
            Te ayudaremos a concretar tu proyecto como artista. Nuestros compositores te ayudarán en todo el proceso que va desde crear desde un tema (single) hasta un álbum completo. Seas un artista emergente o con trayectoria todo talento tiene un público y nosotros llevaremos tu talento al siguiente nivel.
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
            Acapara la atención de más clientes dándole ese toque original al audio / música para que tu publicidad en redes sociales, comerciales de radio o TV (spots), o cualquier campaña publicitaria que quieras llevar a cabo tenga el impacto necesario y llegue a más personas. No importa que tan pequeño o grande sea el proyecto, nuestro equipo de compositores / arreglistas pueden darle la proyección que tu mensaje requiera.
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
            ¿Estas cansado de presentar tus composiciones con música/beats de uso compartido en YouTube y que tu música suene igual a la de los demás? ¡Añádeles tu propio estilo! Podemos componer bases musicales personalizadas para que impactes en tus presentaciones con la originalidad y el máximo nivel de calidad que tu música se merece. Contamos con instrumentales de todos los géneros 100% originales.
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
          Si ya realizas presentaciones, pero te faltan músicos para llevar tu interpretación al siguiente nivel, nuestra Athoxa Live Band es lo que necesitas. Tenemos contacto directo con los mejores instrumentistas de la región quienes podrán acompañarte en tus presentaciones con un nivel de ejecución profesional. Ya sea que necesites un solo músico o una banda / ensamble entero nosotros te podemos ayudar.
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

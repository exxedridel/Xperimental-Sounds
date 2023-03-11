import React from "react";
import { GridContainerStyled } from "./GridContainer.styles";
import incubadoraMusical from "@assets/incubadora-musical.jpg";

const GridContainer = () => {
  return (
    <GridContainerStyled>
      <article className="flow-small">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una incubadora musical/casa productora dedicada a la composición,
          producción, interpretación y arreglos musicales de cualquier género.
          Contamos con compositores, arreglistas, músicos e ingenieros en audio
          con estudios formales egresados de las mejores universidades del país.
          15 años de experiencia con artistas de distintos géneros nos
          respaldan. Ofrecemos también la producción de audio empresarial y de
          negocios adaptándonos a cualquier tipo de negocio y tamaño de tu
          proyecto.
        </p>
        <br />
        {/* <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem um...</li>
        </ul> */}
        <h3>Incubadora musical</h3>
        <p>
          En nuestra incubadora musical te ayudaremos a hacer realidad cualquier
          idea musical que quieras llevar a cabo. Nuestros compositores te
          ayudaran en todo el proceso que conlleva crear una canción hasta un
          álbum. Nosotros no creemos en la música mala o buena, todas las
          creaciones tienen su lugar y sin importar que tipo de música te
          interese producir nosotros podemos ayudarte.
        </p>
      </article>
      <img src={incubadoraMusical} alt="performing artist" />
    </GridContainerStyled>
  );
};

export default GridContainer;

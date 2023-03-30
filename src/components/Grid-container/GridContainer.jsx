import React from "react";
import { GridContainerStyled } from "./GridContainer.styles";
import incubadoraMusical from "@assets/incubadora-musical.jpg";

const GridContainer = () => {
  return (
    <GridContainerStyled>
      <article className="flow-small">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una incubadora musical y casa productora dedicada a la
          composición, producción, interpretación y arreglos musicales de
          cualquier género. Contamos con compositores, arreglistas, músicos e
          ingenieros en audio con estudios formales egresados de las mejores
          universidades del país. 15 años de experiencia con artistas de
          distintos géneros nos respaldan. Ofrecemos también la producción de
          audio empresarial y de negocios adaptándonos a cualquier tipo de
          negocio y tamaño de tu proyecto.
        </p>
      </article>
      <img src={incubadoraMusical} alt="performing artist" />
    </GridContainerStyled>
  );
};

export default GridContainer;

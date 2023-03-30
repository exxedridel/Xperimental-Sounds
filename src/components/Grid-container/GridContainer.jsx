import React from "react";
import { Fade, Flip, Rotate } from "react-awesome-reveal";
import { GridContainerStyled } from "./GridContainer.styles";

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
      <div className="div-xs-image">
        <Fade
          duration="3000"
          cascade
          damping={1e-1}
          className="XS text-accent"
        >
          XS
        </Fade>
      </div>
    </GridContainerStyled>
  );
};

export default GridContainer;

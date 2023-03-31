import React from "react";
import { Fade, Flip, Rotate } from "react-awesome-reveal";
import { GridContainerStyled } from "./GridContainer.styles";

const GridContainer = () => {
  return (
    <GridContainerStyled>
      <article className="flow-small">
        <h2>¿Quiénes Somos?</h2>
        <p>
          Somos un estudio de producción y encubadora musical con más de 5 años
          de experiencia en la composición, producción e interpretación de
          arreglos musicales para cualquier fin. Contamos con compositores,
          instrumentistas e ingenieros en audio con estudios formales en su ramo
          y egresados de las mejores universidades del país.
        </p>
        <p>
          Trabajamos con todos los géneros musicales estándares y experimentales
          para producir artistas con la más alta calidad. Ofrecemos también la
          producción de música para empresas y campañas publicitarias
          adaptándonos a cualquier tipo de mercado y/o tamaño del proyecto.
        </p>
      </article>
      <div className="div-xs-image">
        <Fade duration="2000" cascade damping={0.15} className="XS text-accent">
          XS
        </Fade>
      </div>
    </GridContainerStyled>
  );
};

export default GridContainer;

import React from "react";
import { Fade } from "react-awesome-reveal";
import { GridContainerStyled } from "./GridContainer.styles";

const GridContainer = () => {
  return (
    <GridContainerStyled>
      <article className="flow-small">
        <h2>¿Quiénes Somos?</h2>
        <p>
          Somos un estudio de producción e incubadora musical con más de 15 años de experiencia en composición, producción e interpretación de arreglos musicales. Nuestro equipo está conformado por compositores, instrumentistas e ingenieros en audio altamente capacitados y egresados de las mejores universidades del país y tenemos acceso a los mejores estudios de grabación de la región.
        </p>
        <p>
          Trabajamos con todos los géneros musicales y experimentales. Ofrecemos también la producción de audio para empresas y campañas publicitarias adaptándonos a cualquier tipo de mercado y/o tamaño del proyecto.
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

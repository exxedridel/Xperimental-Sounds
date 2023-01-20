import React from "react";
import { GridContainerStyled } from "./GridContainer.styles";
import StudioXS from "@assets/studio-xperimental.jpg";

const GridContainer = () => {
  return (
    <GridContainerStyled>
      <article>
        <p>
          Somos un estudio de producción musical que tiene como objetivo
          principal el de impulsar a los artistas emergentes y a los artistas
          independientes dentro de la industria. Nuestra manera de trabajo es
          100% especializada en el artista de acuerdo a las necesidades que este
          tenga. Siempre buscamos la manera de encaminar las carreras de
          nuestros artistas lo más que podamos de acuerdo a los deseos y metas
          de cada quien, así como dar asesoramiento, en caso de ser necesario,
          cuando los proyectos que manejan los artistas son ya grandes y buscan
          algo más o diferente. Nos ubicamos en La Ciudad de México y estamos
          ansiosos de conocerte a ti y a tu proyecto.
        </p>
        <ul>
          <li>Sello discográfico con Ditto Music.</li>
          <li>Productora musical.</li>
          <li>Creación de cotenido.</li>
          <li>Y más...</li>
        </ul>
        <p>
          No solo nos enfocamos en hacer música... también contamos con todas
          las herramientas necesarias para poder impulsar tu carrera musical al
          siguiente nivel. Tenemos diversas alianzas con grandes empresas de la
          industria musical y estudios de grabación (Estudio 13, Acid Lemon
          Music, Pro Indie Music, entre otros), así como un equipo de trabajo
          amplio con quienes trabajamos en conjunto para poder desarrollar un
          plan verdaderamente convincente y así poder crecer contigo.
        </p>
      </article>
      <img src={StudioXS} alt="Music studio" />
    </GridContainerStyled>
  );
};

export default GridContainer;

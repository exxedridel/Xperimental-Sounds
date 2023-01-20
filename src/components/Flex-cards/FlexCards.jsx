import React from "react";
import { FlexCardsStyled } from "./FlexCards.styles";
import productionIcon from "@assets/production-icon.png";

const FlexCards = () => {
  return (
    <FlexCardsStyled>
      <div className="card">
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
            Producción Musical
          </h3>
          <p>
            Desde la grabación de la maqueta profesional, arreglos musicales de
            cualquier género, grabación en nuestro estudio hasta la grabación en
            estudios de calidad internacional con músicos profesionales de gran
            calidad, mezcla y máster con los mejores ingenieros. Nos ajustamos a
            cualquier presupuesto.
          </p>
        </div>
      </div>
      <div className="card">
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
            Producción Musical
          </h3>
          <p>
            Desde la grabación de la maqueta profesional, arreglos musicales de
            cualquier género, grabación en nuestro estudio hasta la grabación en
            estudios de calidad internacional con músicos profesionales de gran
            calidad, mezcla y máster con los mejores ingenieros. Nos ajustamos a
            cualquier presupuesto.
          </p>
        </div>
      </div>
      <div className="card">
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
            Producción Musical
          </h3>
          <p>
            Desde la grabación de la maqueta profesional, arreglos musicales de
            cualquier género, grabación en nuestro estudio hasta la grabación en
            estudios de calidad internacional con músicos profesionales de gran
            calidad, mezcla y máster con los mejores ingenieros. Nos ajustamos a
            cualquier presupuesto.
          </p>
        </div>
      </div>
    </FlexCardsStyled>
  );
};

export default FlexCards;

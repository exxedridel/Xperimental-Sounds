import React from "react";
import { FlexCardsStyled } from "./FlexCards.styles";
import productionIcon from "@assets/production-icon.png";

const FlexCards = () => {
  function scrollToContact() {
    const element = document.getElementById("contact-sect");
    element.scrollIntoView();
  }

  return (
    <FlexCardsStyled className="box-shadow">
      <div onClick={scrollToContact} className="card">
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
            Lorem, ipsum dolor.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus accusantium a perferendis, cumque ab totam ea,
            repudiandae minima odit porro fugiat. Accusantium tempora iusto
            quibusdam delectus porro voluptatem sequi quas, earum nesciunt omnis
            exercitationem eligendi? Commodi porro et.
          </p>
        </div>
      </div>
      <div onClick={scrollToContact} className="card">
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
            Lorem ipsum.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus accusantium a perferendis, cumque ab totam ea,
            repudiandae minima odit porro fugiat. Accusantium tempora iusto
            quibusdam delectus porro voluptatem sequi quas, earum nesciunt omnis
            exercitationem eligendi? Commodi porro et.
          </p>
        </div>
      </div>
      <div onClick={scrollToContact} className="card">
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
            Lorem ipsum dolor sit.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus accusantium a perferendis, cumque ab totam ea,
            repudiandae minima odit porro fugiat. Accusantium tempora iusto
            quibusdam delectus porro voluptatem sequi quas, earum nesciunt omnis
            exercitationem eligendi? Commodi porro et.
          </p>
        </div>
      </div>
    </FlexCardsStyled>
  );
};

export default FlexCards;

import styled from "styled-components";
import negocios from "../../assets/negocios.jpg";
import liveBand from "@assets/live-band.jpg";
import ownBeats from "@assets/beats-personalizados.jpg";

export const FlexLinksStyled = styled.div`
  background-color: hsl(var(--black) / 0.25);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .link {
    cursor: pointer;
    text-decoration: none;
    color: white;
    background-color: hsl(var(--neon-blue) / 0.5);
    height: 150px;
    margin: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .div-icon {
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(var(--neon-blue) / 0.4);
    position: relative;
    z-index: 1;
    display: inline-grid;
    place-items: center; /* shorthand for justify and align items */
    padding: 0 1em;
    border-radius: 50%;
    aspect-ratio: 1;
    margin-right: -40px;
    z-index: 1;
  }

  .live-band {
    flex-direction: row-reverse;
    & .div-icon {
      margin-right: 0px;
      margin-left: -40px;
    }
    & .div-span {
      border-radius: 6px 0 0 6px;
    }
  }

  .div-icon img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  .div-span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0 6px 6px 0;
    & span {
      font-family: var(--ff-sans-cond);
      font-size: var(--fs-700);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .business {
    & .div-span {
      background-size: cover;
      /* background-position: bottom center; */
      background-image: url(${negocios});
    }
  }
  .live-band {
    & .div-span {
      background-size: cover;
      background-position: center center;
      background-image: url(${liveBand});
    }
  }
  .own-beats {
    & .div-span {
      background-size: cover;
      /* background-position: bottom center; */
      background-image: url(${ownBeats});
    }
  }
`;

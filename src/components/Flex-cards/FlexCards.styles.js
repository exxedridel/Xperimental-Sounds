import styled from "styled-components";

export const FlexCardsStyled = styled.section`
  background-color: hsl(var(--glow-clr) / 0.8);
  border-radius: 4px;
  color: #396060;
  padding: 5rem 10px 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;

  .card {
    flex-basis: 330px;
    border: none;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .card:hover {
    transform: translateY(-2.5%);
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.6);
  }

  .card .img-card {
    width: 100%;
    height: 220px;
    align-self: center;
    border-radius: 3px 3px 0 0;
    object-fit: cover;
  }

  .icon-production {
    margin-top: -32px;
  }

  .icon-production img {
    margin-inline: auto;
    width: 56px;
    border-radius: 15%;
    border: 2px solid white;
    box-shadow: inset 0px 0px 70px #00678a;
  }

  .info {
    padding: 12px 20px 20px;
  }

  .info h3 {
    font-family: var(--ff-theseasons-reg-full);
    letter-spacing: 1.5px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: #00678a;
    font-size: 20px;
    margin-bottom: 12px;
  }

  .info p {
    line-height: 1.3;
    margin-block: 3px;
    font-size: 16px;
  }

  /* @media (min-width: 35em) {
    & {
      gap: 4.5rem;
    }
  } */

  @media (min-width: 55em) {
    & {
      gap: 6rem;
    }

    .card:hover {
    transform: translateY(-5%);
  }
  }
`;

import styled from "styled-components";

export const FlexCardsStyled = styled.section`
  background-color: hsl(var(--glow-clr) / 0.8);
  color: grey;
  padding: 5rem 10px 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;

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
    transform: translateY(-5%);
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
    width: 68px;
    border-radius: 50%;
    border: 5px solid hsl(var(--neon-blue) / 0.5);
    box-shadow: inset 0px 0px 30px hsl(var(--white) / 1);
  }

  .info {
    padding: 12px 20px 20px;
  }

  .info h3 {
    text-align: center;
    color: crimson;
    font-size: 20px;
    margin-bottom: 12px;
  }

  .info p {
    line-height: 1.3;
    margin-block: 3px;
  }
`;

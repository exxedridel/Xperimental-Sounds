import styled from "styled-components";

export const FlexCardsStyled = styled.section`
  background-color: hsl(var(--glow-clr) / 0.65);
  color: grey;
  padding: 4rem 10px 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  .card {
    flex-basis: 330px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .card .img-production {
    
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
    border: 5px solid hsl(var(--neon-blue)/0.5);
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

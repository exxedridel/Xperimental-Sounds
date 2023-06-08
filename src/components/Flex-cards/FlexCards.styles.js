import styled from "styled-components";

export const FlexCardsStyled = styled.section`
  background-color: hsl(var(--background-clr) / 0.4);
  border-radius: 4px;
  color: hsl(var(--brand-grey));
  padding: 5rem 10px 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;

  .card {
    cursor: pointer;
    flex-basis: 330px;
    border: none;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    background-color: hsl(var(--white));
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    & .icon-production img {
      transition: box-shadow 0.3s ease;
    }
    & .info h3 {
      transition: color 0.3s ease;
    }
  }
  .card:hover {
    transform: translateY(-2.5%);
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.6);
    .icon-production img {
      box-shadow: inset 0px 0px 300px hsl(var(--background-clr));
    }
    .info h3 {
      color: hsl(var(--background-clr));
    }
    .schedule-btn::before {
      clip-path: circle(150% at 50% 50%);
    }
  }

  .card .img-card {
    width: 100%;
    height: 220px;
    align-self: center;
    border-radius: 4px 4px 0 0;
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
    box-shadow: inset 0px 0px 60px hsl(var(--background-clr));
  }

  .info {
    padding: 12px 20px 20px;
  }

  .info h3 {
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: hsl(var(--background-clr));
    font-size: 20px;
    margin-bottom: 12px;
  }

  .info p {
    letter-spacing: 2px;
    line-height: 1.3;
    margin-block: 3px;
    // font-size: 16px;
    font-size: var(--fs-500);
  }

  .schedule-btn {
    margin: 1.25rem auto 1rem;
    background-color: hsl(var(--background-clr) /0.8);
    color: hsl(var(--white));
    /* font-size: 16px; */
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 600;
    border: 0;
    border-radius: 4px;
    padding: 15px 35px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 0;
  }
  .schedule-btn::before {
    border-radius: 4px;
    content: "";
    display: block;
    background: hsl(var(--brand-blue));
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: var(--clippy);
    transition: clip-path 0.6s ease-in-out;
  }

  @media (min-width: 55em) {
    & {
      gap: 6rem;
    }
  }
`;

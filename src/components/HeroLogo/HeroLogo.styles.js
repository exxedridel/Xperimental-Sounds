import styled from "styled-components";

export const HeroLogoStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  & > img {
    background-size: cover;
    width: 100%;
    height: 725px;
    object-fit: cover;
  }

  .overlaped {
    display: block;
    position: absolute;
  }

  .overlaped img {
    width: calc(300px + 3vmin);
    padding-inline: 2rem;
  }

  .overlaped p {
   text-align: center;
   font-size: calc(30px + 2vmin);
   font-weight: bold;
  }
`;

import styled from "styled-components";

export const FixedButton = styled.img`
  position: fixed;
  z-index: 1000;
  bottom:54px;
  right: clamp(0.1em, 5vw, 8em);

  @media (min-width: 65em) {
    & {
      width: 72px; 
    }
  }
  
`;

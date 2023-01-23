import styled from "styled-components";

export const FixedButton = styled.img`
  position: fixed;
  z-index: 1000;
  bottom: clamp(0.1em, 4vw, 8em);
  right: clamp(0.1em, 4vw, 8em);

  @media (min-width: 65em) {
    & {
      width: 72px; 
    }
  }
  
`;

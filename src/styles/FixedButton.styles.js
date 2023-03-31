import styled from "styled-components";

export const FixedButton = styled.img`
  transition: all 0.3s ease;
  width: 44px;

  @media (min-width: 65em) {
    & {
      width: 64px;
    }
  }
`;

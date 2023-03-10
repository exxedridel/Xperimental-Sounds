import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: hsl(var(--black) / 0.5);
  padding: 4rem 1rem;
  text-align: center;

  .line {
   border-bottom: 1px solid white; 
   width: 100px;
  }

 & a {
  transition: all 0.3s ease;
  color: hsl(var(--white) / 0.6);
 }
 & a:hover {
  color: hsl(var(--white) / 1);
 }
`;

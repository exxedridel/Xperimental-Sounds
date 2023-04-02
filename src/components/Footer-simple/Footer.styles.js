import styled from "styled-components";

export const FooterStyled = styled.footer`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

  background-color: hsl(var(--background-clr) / 0.25);
  backdrop-filter: blur(0.5px);
  color: hsl(var(--white) / 0.65);
  padding: 4rem 1rem;
  text-align: center;

  .xs-brand {
    font-family: var(--ff-theseasons-reg-full);
  }

  & a {
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    transition: all 0.3s ease;
    color: hsl(var(--white) / 0.3);
    text-decoration: none;
  }
  & a:hover {
    color: hsl(var(--white) / 0.65);
    text-decoration: underline;
  }
`;

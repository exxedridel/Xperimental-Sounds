import styled from "styled-components";

export const ContainerRtBStyled = styled.div`
  line-height: 1.6;
  font-style: italic;

  & article {
    grid-area: article;
  }

  & img {
    grid-area: image;
    height: 550px;
    width: 100%;
    object-fit: cover;
    margin-top: 2rem;
  }

  @media (min-width: 58em) {
    display: grid;
    place-items: center;
    column-gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas: "article image";
    & img {
      height: 100%;
      margin-top: 0;
    }
  }
`;

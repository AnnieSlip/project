import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
`;

export const Article = styled.article`
  padding: 3%;
  cursor: pointer;
  width: 90%;

  h4 {
    font-weight: 400;
  }

  span {
    font-weight: 600;
  }

  img {
    object-fit: cover;
    height: 300px;
    width: 100%;
    border: 0.25rem solid var(--clr-gold);
    border-radius: var(--radius);
    display: block;
    margin-bottom: 15px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

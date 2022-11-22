import styled from "styled-components";

export const SingleSelectedProduct = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  margin-bottom: 10px;
`;

export const Buttons = styled.div`
  flex-direction: column;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
`;

export const Button_div = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    width: 100px;
    height: 40px;
    background-color: #5ece7b;
    border: 1px solid transparent;
    color: white;
    text-transform: uppercase;
    transition: 0.5s all ease-out;

    &:hover {
      background-color: inherit;
      color: black;
      border: 1px solid black;
    }
  }
`;

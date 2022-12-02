import styled from "styled-components";

export const Overlay = styled.section`
  position: absolute;
  width: 350px;
  top: 70px;
  right: 50px;
  z-index: 99;
  background-color: white;
  padding: 20px 15px;
`;

export const SingleSelectedProduct = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  margin-bottom: 10px;
  gap: 10px;
  margin: 40px 0px;
`;

export const Buttons = styled.div`
  flex-direction: column;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  background-color: inherit;

  button {
    border: 1px solid black;
    width: 25px;

    cursor: pointer;
    text-align: center;
    transition: 0.5s ease-out;
    font-size: 1.2rem;
    &:hover {
      color: white;
      background-color: black;
    }
  }
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

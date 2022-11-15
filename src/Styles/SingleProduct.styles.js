import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  gap: 4%;
  margin-top: 70px;

  img {
    display: block;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  h3 {
    font-weight: 400;
  }

  h4 {
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export const Photo = styled.div`
  img {
    width: 600px;
    height: 500px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  transition: 0.5s all ease-out;
`;

export const Add_Button = styled(Button)`
  padding: 10px 40px;
  background-color: #5ece7b;
  border: none;
  text-transform: uppercase;
  color: white;
  position: relative;
  border: 2px solid transparent;
  font-weight: 500;

  &:hover {
    color: #5ece7b;
    background-color: white;
    border: 2px solid #5ece7b;
  }

  /* &:hover {
    background-color: white;
    color: #5ece7b;
  } */
`;

export const Size_Button = styled(Button)`
  border: 1px solid black;
  padding: 6px 12px;
  color: black;
  background-color: inherit;
  margin-right: 10px;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const Description = styled.div`
  > * {
    margin-bottom: 5%;
  }
`;

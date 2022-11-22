import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`;

export const NavButton = styled(Button)`
  text-transform: uppercase;
  background-color: inherit;
  position: relative;
  font-weight: 500;
  font-size: 17px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.09rem;
    left: 0;
    bottom: 0;
    background: #5ece7b;
    transform: scale(0, 1);
  }
  &:hover::after {
    transform: scale(1, 1);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #5ece7b;
  }
`;

export const Dropdown = styled.div`
  cursor: pointer;
  width: 5%;

  div {
    display: flex;
    width: 5rem;
    justify-content: space-around;
    align-items: center;
    padding: 7px;
  }

  img {
    width: 12px;
  }

  ul {
    position: absolute;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  li {
    padding: 10px;
    list-style: none;
  }

  li:hover {
    background-color: #eeeeee;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  gap: 10%;
  align-items: center;

  p {
    font-weight: 600;
  }

  span {
    position: absolute;
    color: white;
    background-color: black;
    padding: 6px 10px;
    border-radius: 50%;
    text-align: center;
    top: 1%;
    right: 3.8%;
  }
`;

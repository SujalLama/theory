import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export const Nav = styled.nav`
  background-color: ${({ navbar }) => (navbar ? "#000" : "transparent")};
  display: flex;
  color: #fff;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(100vw - 90%);
  position: fixed;
  width: 100%;
  transition: background-color ease-in-out 0.2s;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;

  width: 50%;

  font-size: 1.3em;

  transition: all ease-in-out 0.5s;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    position: absolute;
    z-index: 999;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? 0 : "-1000px")};
    bottom: 0;

    align-items: center;
    justify-content: space-evenly;

    height: 100vh;

    background: #222;

    transition: right ease-in 0.5s;
  }
`;

export const NavLogo = styled.h1``;

export const NavIcon = styled(FaBars)`
  display: none;
  color: #ccc;
  font-size: 1.5em;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    display: block;
    &:hover {
      color: #fff;
    }
  }
`;

export const NavItem = styled.a`
  text-transform: none;
  color: #bbb;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const NavBtn = styled.button`
  background: #bbb;
  padding: 0.2em 0.4em;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 1.1em;

  &:hover {
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 0.4em 0.6em;
    font-size: 1.1em;
  }
`;

export const CloseIcon = styled(AiFillCloseCircle)`
  display: none;
  color: #ccc;
  font-size: 1.5em;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 1em;
    right: 1.5em;

    &:hover {
      color: #fff;
    }
  }
`;

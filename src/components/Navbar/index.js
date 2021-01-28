import React, { useState } from "react";
import {
  Nav,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavBtn,
  CloseIcon
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <Nav navbar={navbar}>
        <NavLogo>Theory</NavLogo>
        <NavIcon onClick={() => setIsOpen(!isOpen)}></NavIcon>
        <NavMenu isOpen={isOpen}>
          <CloseIcon onClick={() => setIsOpen(!isOpen)}></CloseIcon>
          <NavItem>Home</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Contact</NavItem>
          <NavBtn>Sign Up</NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

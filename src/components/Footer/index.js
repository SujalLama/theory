import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { FooterWrapper, IconWrapper } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterWrapper className="container">
        <IconWrapper>
          <span>
            <FaFacebookF />
          </span>
          <span>
            <SiTwitter />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaPinterest />
          </span>
        </IconWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;

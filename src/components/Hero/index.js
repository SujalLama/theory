import React from "react";
import { HeroWrapper, HeroTitle, HeroP, HeroContent } from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContent>
          <HeroTitle>Welcome to Theory</HeroTitle>
          <HeroP>A free responsive HTML5 website template by TEMPLATED.</HeroP>
        </HeroContent>
      </HeroWrapper>
    </>
  );
};

export default Hero;

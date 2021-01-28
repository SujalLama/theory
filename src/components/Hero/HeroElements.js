import styled from "styled-components";

export const HeroWrapper = styled.div`
  background: linear-gradient(95deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    url("https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 80vh;
  z-index: -1;
  position: relative;
  width: 100%;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    background-attachment: scroll;
    height: 50vh;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  z-index: 1;
  color: #fff;
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 20px;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-weight: 300;
  font-size: clamp(2em, 7vw, 4em);
  margin-bottom: 3vh;
`;

export const HeroP = styled.p`
  font-size: clamp(1em, 3vw, 2em);
`;

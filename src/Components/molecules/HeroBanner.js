import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export const BannerWrapper = styled.div`
  width: 90%;
  margin: 20px auto 22px auto;
  height: 111px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    border-radius: 10px;
  }

  @media (min-width: 481px) {
    height: 223px;
    margin-top: 40px;
    border-radius: 25px;
    &::before {
      border-radius: 25px;
    }
  }
`;
export const BannerImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  @media (min-width: 481px) {
    border-radius: 25px;
  }
`;

export const HeroText = styled.p`
  position: absolute;
  left: 5%;
  top: 10%;
  font-weight: 500;
  font-size: 24px;
  color: white;
  z-index: 5;
  width: 220px;

  @media (min-width: 481px) {
    width: 100%;
    font-size: 48px;
    text-align: center;
    left: 0%;
    bottom: 10%;
  }
`;
const getHeroHeight = (pathname) => {
  if (pathname === "/about") {
    return "223px";
  }
};
const HeroBanner = (props) => {
  const location = useLocation();
  const heroHeight = getHeroHeight(location.pathname);

  return (
    <BannerWrapper style={{ height: heroHeight }}>
      <BannerImage src={props.picture} alt={props.alt} />
      <HeroText> {props.text} </HeroText>
    </BannerWrapper>
  );
};

export default HeroBanner;

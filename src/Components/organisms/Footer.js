import React from "react";
import Logos from "../../assets/footer_logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 209px;
  background-color: black;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const FooterLogo = styled.img`
  width: 122px;

  @media (min-width: 768px) {
    width: 210px;
    height: 68px;
    margin-top: 20px;
  }
`;

function Footer(props) {
  return (
    <FooterWrapper>
      <Link to="/">
        <FooterLogo src={Logos} />
      </Link>
      <span>© 2020 Kasa. All rights reserved</span>
    </FooterWrapper>
  );
}

export default Footer;

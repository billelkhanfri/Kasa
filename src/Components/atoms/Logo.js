import React from "react";
import { Link } from "react-router-dom";
import Logos from "../../assets/logo_kasa.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

export const HomeLogo = styled.img`
  width: 145px;

  @media (min-width: 768px) {
    width: 210px;
    height: 68px;
    margin-top: 20px;
  }
`;

const Logo = () => {
  return (
    <Link to="/">
      {" "}
      <HomeLogo src={Logos}></HomeLogo>
    </Link>
  );
};
Logo.propTypes = {
  Logos: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  Logos: Logos,
};
export default Logo;

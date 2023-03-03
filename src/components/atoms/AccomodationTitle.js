import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/colors";
import PropTypes from "prop-types";

export const TitleWrapper = styled.div``;
export const TitleStyle = styled.h1`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const ParagStyle = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
function AccomodationTitle({ title, location }) {
  return (
    <>
      <TitleStyle>{title}</TitleStyle>
      <ParagStyle>{location}</ParagStyle>
    </>
  );
}
AccomodationTitle.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

AccomodationTitle.defaultProps = {
  location: "",
  title: "",
};

export default AccomodationTitle;

import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/colors";
import { NavLink } from "react-router-dom";


export const StyledLink = styled(NavLink)`
  font-size: 3.45vw;
  font-weight: 500;
  color: ${colors.primary};
  text-decoration: none;
  margin: 18px 0px 12px 0px;
  text-transform: uppercase;
  &.active {
    text-decoration: underline;
  }

  @media (min-width: 481px) {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

export const LinksWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) and (orientation: landscape) {
    gap: 60px;
  }
`;

function Navigation(props) {
  return (
    <LinksWrapper>
      <StyledLink activestyle={{ textDecoration: "underline" }} to="/">
        Accueil
      </StyledLink>
      <StyledLink activestyle={{ textDecoration: "underline" }} to="/about">
        A propos
      </StyledLink>
    </LinksWrapper>
  );
}

export default Navigation;

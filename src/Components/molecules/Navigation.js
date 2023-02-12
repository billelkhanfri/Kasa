import React from 'react';
import { StyledLink } from '../Styles/Atoms-styles/NavLink.style';
import { LinksWrapper } from '../Styles/molecules-styles/Navigation.style';



function Navigation(props) {
  return (
    <LinksWrapper>
      <StyledLink to="/" >Accueil</StyledLink>

      <StyledLink to="/about">A propos</StyledLink>
    </LinksWrapper>
  );
}

export default Navigation;
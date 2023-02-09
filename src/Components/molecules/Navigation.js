import React from 'react';
import { StyledLink } from '../atoms/NavLink';
import styled from 'styled-components'




const LinksWrapper = styled.nav`
 display: flex;
 justify-content: space-between;
 gap: 1rem;


  @media  (min-width: 1281px) {
    gap:60px;
    
  }
    @media  (min-width: 1025px) and (max-width:1280px){
    gap:60px;
    
  }
      @media  (min-width: 768px) and (max-width:1024px){
    gap:60px;
    
  }
        @media  (min-width: 768px) and (max-width:1024px) and (orientation: landscape){
    gap:60px;
    
  }

 

`

function Navigation(props) {
  return (
    <LinksWrapper>
      <StyledLink to="/" >Accueil</StyledLink>

      <StyledLink to="/about">A propos</StyledLink>
    </LinksWrapper>
  );
}

export default Navigation;
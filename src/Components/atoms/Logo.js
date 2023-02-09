import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logos from '../../assets/logo_kasa.svg'

const HomeLogo = styled.img`
  width: 145px;
  
       @media  (min-width: 768px) {
   width: 210px;
   height: 68px;
   margin-top: 20px;
    
  }
`
function Logo(props) {
  return (
    <Link to="/"><HomeLogo src={Logos} /></Link>
  );
}

export default Logo;
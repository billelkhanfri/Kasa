import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLogo } from '../Styles/Atoms-styles/Logo.style'
import Logos from '../../assets/logo_kasa.svg'

const Logo = () => {
  return (
    <Link to="/"> <HomeLogo src={Logos}></HomeLogo></Link>
  );
};

export default Logo;

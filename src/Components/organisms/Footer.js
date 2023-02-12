import React from 'react';
import Logos from '../../assets/footer_logo.svg'
import { Link } from 'react-router-dom'
import { FooterLogo, FooterWrapper } from '../Styles/organisms-styles/Footer.style';


function Footer(props) {
    return (
        <FooterWrapper>
            <Link to="/"><FooterLogo src={Logos} /></Link>
            <span>© 2020 Kasa. All rights reserved</span>
        </FooterWrapper>
    );
}

export default Footer;
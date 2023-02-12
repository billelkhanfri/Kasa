import React from 'react';
import { BannerWrapper, HeroText, BannerImage, LargeHeroText } from '../Styles/molecules-styles/HeroBanner.style';
import Banner from '../../assets/bandeau.png'


const HeroBanner = () => {
    return (
        <BannerWrapper>
            <BannerImage src={Banner}></BannerImage>
            <HeroText > Chez vous,<br />
                partout et ailleurs</HeroText>
            <LargeHeroText>
                Chez vous,
                partout et ailleurs</LargeHeroText>

        </BannerWrapper>
    );
};

export default HeroBanner;


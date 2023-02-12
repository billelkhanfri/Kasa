import styled from "styled-components"
import LgBann from '../../../assets/bandeau_about.png'
import SmBann from '../../../assets/Bandeau-small-about.png'




export const BannerWrapper = styled.div`
width: 90%;
margin: 20px auto 22px auto;
height: 223px;
position: relative;
background-image: url(${SmBann});
    border-radius: 10px;
    background-size: cover;

   &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .6) 100%);
    z-index: 5;
    border-radius: 10px;
  }

@media  (min-width: 481px) {
  height: 223px;
  margin-top: 40px;
    border-radius: 25px;
    background-image: url(${LgBann});
       &::before {
   
    border-radius: 25px;
  }
  }

`


import styled from "styled-components"


export const BannerWrapper = styled.div`
width: 90%;
margin: 20px auto 22px auto;
height: 111px;
position: relative;
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
         &::before {
   
    border-radius: 25px;
  }
  }

`
export const BannerImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
@media  (min-width: 481px) {
  border-radius: 25px;
  }
`

export const HeroText = styled.p`
position: absolute;
  left: 5%;
  top: 10%;
  font-weight: 500;
  font-size: 24px;
  color: white;
    z-index:5;

  

@media  (min-width: 481px) {
    display: none;

  
      }

`
export const LargeHeroText = styled.p` 

display: none;
@media  (min-width: 482px) {
  display: inline;
  position: absolute;
  left: 10%;
  top: 15%;
    font-weight: 500;
    font-size: 36px;
    color: white;
    width: 80%;
 z-index:5;
      }
@media  (min-width: 768px) {

  font-size: 48px;
  text-align:center;
   width: 100%;
  left: 0;
 
      } 

`


import React, { useState } from 'react';
import styled from 'styled-components';
import Arrowup from '../../assets/arrow_up.svg'
import { colors } from '../Styles/colors';

const GobalWrapper = styled.div`
width:90%;
  height: auto;
  margin: 30px  auto;
  border-radius: 5px;
  @media  (min-width: 768px) {
 width:71% ;
      } 
`

const DropDownSeen = styled.div` 
  background:${colors.primary};
  color: white ;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
 height: 30px;
  padding: 0 12px;
         @media  (min-width: 768px) {
height:47px ;
      } 
  
`
const Title = styled.h2`
 font-size: 13px;
 font-weight:500;

 @media  (min-width: 768px) {
font-size:24px ;
      } 

`
const ArrowImg = styled.img`
width: 8.98px;
height: 15.2px;
  @media  (min-width: 768px) {
width: 14.06px;
height: 24px;
      } 

`
 
const ContentWrapper = styled.div`
height: auto;
background: #f6f6f6;
border-radius: 5px 0px;

 `
const Content = styled.p`
  margin: 0px;
  pointer-events: none;
  color: #ff6060;
   font-size: 12px;
    line-height: 18px;
    padding: 10px 15px;
             @media  (min-width: 768px) {
font-size:24px;
  line-height: 34px;
      } 


 `



function DropDown(props) {
const [toggle, setToggle] = useState(true)
   
    return (
   <GobalWrapper> 
        <DropDownSeen onClick ={( ) => setToggle(!toggle)}>
          <Title>{props.title}</Title>
          <ArrowImg src={Arrowup} alt="Arrow"  style={{rotate: toggle ? "180deg" : ""}}/>
    </DropDownSeen>
      
        {toggle && (    <ContentWrapper>
                  <Content>{props.content}</Content>
        </ContentWrapper>)}
        
       
  
     
      
         
            </GobalWrapper>
       
    )
}

export default DropDown;

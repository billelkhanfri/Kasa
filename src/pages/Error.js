import React from 'react';
import Header from '../Components/organisms/Header';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../Components/Styles/colors';


const ErrorWrapper = styled.section`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px 50px;

  @media  (min-width: 1281px) {
    gap:60px;
    
  }
    @media  (min-width: 1025px) and (max-width:1280px){
   
    
  }
      @media  (min-width: 768px) and (max-width:1024px){
    gap:60px;
    
  }
        @media  (min-width: 768px) and (max-width:1024px) and (orientation: landscape){
    gap:60px;
    
  }

`
const ErrorNumber = styled.h1`
font-size: 22vw;
font-weight: 700;
color: ${colors.primary};
margin: 10px 10px;
`

const ErrorText = styled.p`
font-size: 1em;
    text-align: center;
    vertical-align:center;
    margin-top: 10px;
    color: ${colors.primary};
    margin-bottom: 133px;
           @media  (min-width: 768px)  and (orientation: landscape){
  font-size: 2em;
  }
   
`
const RetunrLink = styled(NavLink)`
font-size: 0.875rem;
 text-decoration: underline;
 color: ${colors.primary};

           @media  (min-width: 768px)  and (orientation: landscape){

  font-size: 1em;
  }

 `

function Error(props) {
  return (
    <div>
      <Header />
      <ErrorWrapper>

        <ErrorNumber> 404 </ErrorNumber>
        <ErrorText>Oups ! La page que vous demandez n'existe pas.</ErrorText>
        <RetunrLink to="/">Retourner sur la page d’accueil</RetunrLink>
      </ErrorWrapper>
    </div>

  );
}

export default Error;



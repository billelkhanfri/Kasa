import React from 'react';
import Header from '../Components/organisms/Header';
import Footer from '../Components/organisms/Footer';
import HeroBanner from '../Components/molecules/HeroBanner';
import Thumb from '../Components/atoms/Thumb';
import Datas from '../logements.json'
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
    width: 90%;
    margin: 20px auto;

   
   
   
 @media  (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
   
  width: 90%;
   row-gap: 50px;
margin: 50px auto;
    padding: 56px 0px;
  background-color:#F6F6F6;
  border-radius: 25px;


justify-items:center;



 
      }
   

`








function Home(props) {

    return (
        <>

            <Header />
            <HeroBanner></HeroBanner>


            <CardWrapper>
                {Datas.map((logement) => (
                    <Thumb
                        key={`logement-${logement.id}`}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}

            </CardWrapper>
            <Footer />



        </>


    );
}

export default Home;
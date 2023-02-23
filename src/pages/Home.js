import React from "react";
import Header from "../Components/organisms/Header";
import Footer from "../Components/organisms/Footer";
import HeroBanner from "../Components/molecules/HeroBanner";
import Thumb from "../Components/atoms/Thumb";
import useFetch from "../utils/useFetch";
import styled from "styled-components";
import Banner from "./../assets/home.png";
import PropTypes from "prop-types";
import KasaLoader from "../Components/organisms/Loader";
import Error from "./Error";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
  width: 90%;
  margin: 20px auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    row-gap: 50px;
    margin: 50px auto;
    padding: 56px 0px;
    background-color: #f6f6f6;
    border-radius: 25px;
    justify-items: center;
  }
`;

function Home() {
  const { data, loading, error } = useFetch("/db/logements.json");
  if (loading) return <KasaLoader></KasaLoader>;

  if (error) return <Error />;

  return (
    <>
      <Header />
      <HeroBanner
        picture={Banner}
        alt="Image d'une forêt au bord de mer"
        text="Chezvous, partout et ailleurs"></HeroBanner>

      <CardWrapper>
        {data &&
          data?.map((logement) => (
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
Home.propTypes = {
  text: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Home.defaultProps = {
  cover: "",
  text: "",
  picture: "",
  title: "",
  id: "",
};

export default Home;

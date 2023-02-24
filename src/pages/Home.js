import React from "react";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import HeroBanner from "../components/molecules/HeroBanner";
import Thumb from "../components/atoms/Thumb";
import useFetch from "../utils/useFetch";
import styled from "styled-components";
import Banner from "./../assets/home.png";
import PropTypes from "prop-types";
import KasaLoader from "../components/organisms/Loader";

const CardSection = styled.div`
  width: 90%;
  margin: 20px auto;
  @media (min-width: 768px) {
    background-color: #f6f6f6;
    border-radius: 25px;
    width: 86%;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
  justify-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    row-gap: 60px;
    padding: 75px 0px;
    justify-items: center;
    width: 86%;
    margin: auto;
  }
`;

function Home() {
  const { data, loading, error } = useFetch("/db/logements.json");
  if (loading) return <KasaLoader></KasaLoader>;

  if (!data) return error;

  return (
    <>
      <Header />
      <HeroBanner
        picture={Banner}
        alt="Image d'une forêt au bord de mer"
        text="Chezvous, partout et ailleurs"></HeroBanner>
      <CardSection>
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
      </CardSection>
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

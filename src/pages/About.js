import React from "react";
import DropDown from "../Components/molecules/DropDown";
import HeroBanner from "../Components/molecules/HeroBanner";
import Footer from "../Components/organisms/Footer";
import Header from "../Components/organisms/Header";
import AboutData from "../Local-json/about.json";
import Banner from "../assets/about.png";
import PropTypes from "prop-types";

function About(props) {
  return (
    <>
      <Header />
      <HeroBanner picture={Banner} hauteur={"223px"}></HeroBanner>
      <>
        {AboutData.map((about) => {
          return (
            <div key={about.title}>
              <DropDown {...about} />
            </div>
          );
        })}
      </>
      <Footer />
    </>
  );
}
About.propTypes = {
  picture: PropTypes.string.isRequired,
};

About.defaultProps = {
  title: "",
  picture: "",
};
export default About;

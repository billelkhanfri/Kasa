import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SliderWrapper = styled.div`
  width: 86%;
  margin: 20px auto 10px auto;
  height: 255px;
  position: relative;

  @media (min-width: 768px) {
    height: 415px;
    margin: 30px auto;
  }
`;

const SliderStyle = styled.div`
  height: 100%;
  border-radius: 25px;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 28%;
  transform: translate(0, 50%);
  left: 10px;
  font-size: 50px;
  color: white;
  z-index: 1;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 5%;
    transform: translate(0, 50%);
    left: 10px;
    font-size: 150px;
  }
`;

const RightArrow = styled.div`
  position: absolute;
  top: 28%;
  transform: translate(0, 50%);
  right: 10px;
  font-size: 50px;
  color: white;
  z-index: 1;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 5%;
    transform: translate(0, 50%);
    right: 10px;
    font-size: 150px;
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: ${(props) => (props.active ? "white" : "#d8d8d8")};
  cursor: pointer;
`;

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentImage === 0;
    const nextImage = isFirstSlide ? images.length - 1 : currentImage - 1;
    setCurrentImage(nextImage);
  };

  const goToNext = () => {
    const isLastSilde = currentImage === images.length - 1;
    const nextImage = isLastSilde ? 0 : currentImage + 1;
    setCurrentImage(nextImage);
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <SliderWrapper>
      {images.length > 1 && <LeftArrow onClick={goToPrevious}>‹</LeftArrow>}
      {images.length > 1 && <RightArrow onClick={goToNext}>›</RightArrow>}

      <SliderStyle
        style={{
          backgroundImage: ` url(${images[currentImage]})`,
        }}></SliderStyle>

      {images.length > 1 && (
        <DotContainer>
          {images.map((image, index) => (
            <Dot
              key={index}
              active={index === currentImage}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotContainer>
      )}
    </SliderWrapper>
  );
};

Gallery.propTypes = {
  currentImage: PropTypes.string.isRequired,
};

Gallery.defaultProps = {
  currentImage: "",
};

export default Gallery;

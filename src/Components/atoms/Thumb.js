import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import DefaultPicture from "../../assets/Thumb.png";

export const CardDiv = styled.li`
  list-style: none;
  height: 255px;
  position: relative;
  margin-bottom: 20px;
  transition: all 0.3s ease-out;
  background-color: #ff6060;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65) 12%,
      rgba(255, 255, 255, 0) 50%
    );
    z-index: 2;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    height: 340px;
    width: 340px;

    margin-bottom: 20px;
    box-sizing: border-box;
  }
`;

export const CardCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(70%);
`;

export const CardTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: white;
  position: absolute;
  left: 15px;
  bottom: 0px;
  max-width: 75%;
  z-index: 2;
`;

const Thumb = ({ cover, title, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link to={`/logement/${id}`} key={`${id}`}>
      <CardDiv
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}>
        <CardCover src={cover} />
        <CardTitle>{title}</CardTitle>
      </CardDiv>
    </Link>
  );
};
Thumb.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

Thumb.defaultProps = {
  cover: DefaultPicture,
  title: "",
};
export default Thumb;

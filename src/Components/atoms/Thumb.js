import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardDiv = styled.li`
  list-style: none;
  height: 255px;
  position: relative;
  margin-bottom: 20px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 2;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    height: 340px;
    width: 340px;
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
  return (
    <Link to={`/logement/${id}`} key={`${id}`}>
      <CardDiv>
        <CardCover src={cover} />
        <CardTitle>{title}</CardTitle>
      </CardDiv>
    </Link>
  );
};

export default Thumb;

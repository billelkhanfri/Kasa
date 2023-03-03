import React from "react";
import styled from "styled-components";

const Stars = styled.svg`
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Star = ({ fill }) => {
  return (
    <Stars
      width="15"
      height="15"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
        fill={fill}
      />
    </Stars>
  );
};

export default Star;

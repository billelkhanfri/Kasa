import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoadeStyle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff6060;
  animation: loader 1s ease-in-out infinite;
`;
const LoaderText = styled.div`
  color: #ff6060;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @keyframes loader {
    0% {
      transform: scale(0.3);
      opacity: 0.1;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.3);
      opacity: 0.1;
    }
  }
`;

function KasaLoader() {
  return (
    <LoaderContainer>
      <LoadeStyle></LoadeStyle>
      <LoaderText>Kasa is loading... </LoaderText>
    </LoaderContainer>
  );
}

export default KasaLoader;

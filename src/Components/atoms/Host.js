import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/colors";

export const HostWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const HostStyle = styled.div`
  color: ${colors.primary};
  font-size: 12px;
  width: min-content;
  text-align: right;
  @media (min-width: 768px) {
    font-size: 18px;
  } ;
`;
export const HostImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

const Host = ({ host }) => {
  return (
    <HostWrapper>
      <HostStyle>{host.name}</HostStyle>
      <HostImage src={host.picture} alt={host.name} />
    </HostWrapper>
  );
};

export default Host;

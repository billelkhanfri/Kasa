import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/colors";

export const TagStyle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  color: white;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Tag = ({ tags }) => {
  return (
    <>
      {tags &&
        tags.map((tag) => <TagStyle key={Math.random()}>{tag}</TagStyle>)}
    </>
  );
};

export default Tag;

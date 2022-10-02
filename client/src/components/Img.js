import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  &.small {
    max-width: 50px;
    border-radius: 100px;
    padding: 5px;
  }
  &.medium {
    max-width: 200px;
    padding: 10px;
  }
  &.big {
    max-width: 800px;
    padding: 10px;
  }
`;

export const Img = ({ src, alt, className }) => {
  return <StyledImg src={src} alt={alt} className={className} />;
};

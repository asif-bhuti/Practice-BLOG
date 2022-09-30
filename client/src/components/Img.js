import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
`;

export const Img = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />;
};

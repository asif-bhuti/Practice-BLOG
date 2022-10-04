import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`;

export const Span = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

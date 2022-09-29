import React from "react";
import styled from "styled-components";
import {v,b,s} from "./styles/variables"

const StyledCard = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;
  background: ${({theme})=>theme.color.foreground};
  border-radius: ${v.borderRadius};
  border: 1px solid ${({theme})=>theme.color.foreground};
  box-shadow: ${v.cardBoxShadow};
  .mid {
    max-width: 800px;
  }
`;

export const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};
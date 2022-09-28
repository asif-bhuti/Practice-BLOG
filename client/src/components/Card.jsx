import React from "react";
import styled from "styled-components";
import * as v from "../styles/variables";

const StyledCard = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;
  background: ${v.primaryBGcolor};
  border-radius: 10px;
  border: 1px solid ${v.primaryBGcolor};
  .mid {
    max-width: 800px;
  }
`;

export const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};
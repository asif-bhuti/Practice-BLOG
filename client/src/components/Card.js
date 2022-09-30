import React from "react";
import styled from "styled-components";
import { v, b, s } from "./styles/variables";

const StyledCard = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;
  background: ${({ theme }) => theme.color.foreground};
  border-radius: ${v.borderRadius};
  border: 1px solid ${({ theme }) => theme.color.foreground};
  box-shadow: ${v.cardBoxShadow};
  &.lrg {
    max-width: 800px;
  }
  &.m {
    max-width: 600px;
  }
  &.sm {
    max-width: 400px;
  }
`;

export const Card = ({ className, children, key }) => {
  return (
    <StyledCard className={className} key={key}>
      {children}
    </StyledCard>
  );
};

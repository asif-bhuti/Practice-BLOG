import React from "react";
import styled from "styled-components";
import { v, s } from "./styles/variables";

const StyledText = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  margin: 1px 0 0 0;
  color: ${({ theme }) => theme.color.textdark};
  &.header {
    font-family: Nunito;
    font-size: ${v.headerHeight};
    font-weight: 600;
    color: ${({ theme }) => theme.color.header};
  }
  &.title {
    font-family: Nunito;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.header};
  }
  &.small {
    font-size: 0.9rem;
  }
`;

export const Text = ({ children, className }) => {
  return <StyledText className={className}>{children}</StyledText>;
};

import React from "react";
import styled from "styled-components";
import { v } from "./styles/variables";

const StyledHeader = styled.h1`
  font-family: Nunito;
  font-size: 2rem;
  font-weight: 600;
  margin: 1px 0 0 0;
  color: ${({ theme }) => theme.color.textdark};
  &.small {
    font-size: 1.2rem;
  }
  &.large {
    font-size: ${v.headerHeight};
    color: ${({ theme }) => theme.color.header};
  }
`;

export const Header = ({ children, className }) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};

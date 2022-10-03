import React from "react";
import styled from "styled-components";
import { v, s } from "./styles/variables";

const StyledText = styled.p`
  font-family: Poppins;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 1px 0 0 0;
  text-align: justify;
  line-height: 30px;
  color: ${({ theme }) => theme.color.textdark};
  &.title {
    font-family: Nunito;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.header};
  }
  &.bold {
    font-weight: 600;
  }
  &.small {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

export const Text = ({ children, className }) => {
  return <StyledText className={className}>{children}</StyledText>;
};

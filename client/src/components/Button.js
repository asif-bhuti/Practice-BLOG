import React from "react";
import styled from "styled-components";
import { b, v, s } from "./styles/variables";

const StyledButton = styled.button`
  white-space: nowrap;
  padding: 4px 30px;
  margin: 5px 0px;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  border-radius: ${v.borderRadius};
  cursor: pointer;
  &.primary {
    background: ${({ theme }) => theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.textlight};
    &:hover {
      background-color: ${({ theme }) => theme.color.primaryDark};
    }
  }
  &.secondary {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.textdark};
    &:hover {
      background-color: ${({ theme }) => theme.color.secondaryDark};
    }
  }
  &.small {
    padding: 4px 10px;
    margin: 5px 0px;
    font-size: 15px;
    font-weight: 400;
  }
  &:hover {
    transition: all 0.3s ease-out;
    background: ${v.secondaryElementColor};
    color: ${v.primaryBGcolor};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Button = ({ children, className, type, name, value, onClick }) => {
  return (
    <StyledButton
      className={className}
      type={type}
      name={name}
      value={value}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

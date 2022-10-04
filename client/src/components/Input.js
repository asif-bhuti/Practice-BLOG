import React from "react";
import styled from "styled-components";
import { v } from "./styles/variables";

const StyledInput = styled.input`
  display: block;
  width: 400px;
  background-color: ${({ theme }) => theme.color.foreground};
  height: 40px;
  border-radius: ${v.borderRadius};
  border: 2px solid ${({ theme }) => theme.color.background};
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  &.small {
    height: 20px;
  }
  &.field {
    width: 100%;
    height: 500px;
    text-align: start;
  }
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.background};
    transition: ease-in 0.3s;
  }
`;
export const Input = ({
  type,
  name,
  onChange,
  value,
  placeholder,
  style,
  className,
  id,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={style}
      className={className}
      id={id}
    />
  );
};

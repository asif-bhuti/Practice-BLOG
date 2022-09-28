import React from "react";
import styled from "styled-components";
import * as v from "./styles/variables";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: ${v.primaryBGcolor};
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${v.secondaryElementColor};
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    background-color: ${v.secondaryBGcolor};
    border-color: ${v.primaryElementColor};
    transition: ease-in 0.3s;
  }
`;

export const Input = ({ type, name, onChange, value }) => {
  return (
    <StyledInput type={type} name={name} onChange={onChange} value={value} />
  );
};

import { React, useState } from "react";
import { Text, Button, Card, Input, InputField } from "../../components";
import { ContainerLogin } from "./Login.styled";
import styled from "styled-components";

//Styled components for Select and FieldSet
export const FieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
    display: flex;
  }
  input {
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  background-color: #eee;
  color: #555;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
`;

//Login Page Element
export const Login = () => {
  //hook for username and password
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  //handles Submit
  const handleSubmit = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  //handles the Form
  const submitForm = async (e) => {
    e.preventDefault();
  };

  return (
    <ContainerLogin>
      <Card className={`medium`}>
        <form onSubmit={submitForm}>
          <Text className="header">Sign In</Text>
          <label htmlFor="">
            <Text>Userame :</Text>
          </label>
          <InputField
            type="text"
            name="name"
            onChange={handleSubmit}
            value={data.name}
          />
          <label htmlFor="">
            <Text>Password :</Text>
          </label>
          <InputField
            type="password"
            name="password"
            onChange={handleSubmit}
            value={data.password}
          />

          <Button
            className="primary"
            type="submit"
            name="submit"
            value="Register"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </ContainerLogin>
  );
};

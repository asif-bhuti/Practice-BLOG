import { React, useState } from "react";
import { Text, Button, Card, Input, InputField } from "../../components";
import { Container } from "../../components/styles/globalstyles";
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

//Register Page Element
export const Register = () => {
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
    <Container>
      <Card>
        <form onSubmit={submitForm}>
          <Text className="title">Sign Up</Text>
          <label htmlFor="">
            <Text>Name :</Text>
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
          <label htmlFor="">
            <Text>Birthday :</Text>
          </label>
          <InputField
            type="date"
            name="date"
            onChange={handleSubmit}
            value={data.date}
          />
          <FieldSet>
            <legend>
              <Text>Gender :</Text>
            </legend>
            <Select name="gender" onChange={handleSubmit} value={data.gender}>
              <option value="1" disabled>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Femal">Female</option>
              <option value="Other">Other</option>
            </Select>
          </FieldSet>
          <label htmlFor="">
            <Text>Select Blood Group :</Text>
          </label>

          <Select name="blood" onChange={handleSubmit} value={data.blood}>
            <option value="1" disabled>
              Select Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB_">AB-</option>
          </Select>

          <label htmlFor="">
            <Text>E-mail :</Text>
          </label>
          <InputField
            type="text"
            name="email"
            onChange={handleSubmit}
            value={data.email}
          />
          <label htmlFor="">
            <Text>Phone :</Text>
          </label>
          <InputField
            type="tel"
            name="tel"
            onChange={handleSubmit}
            value={data.tel}
          />
          <label htmlFor="">
            <Text>Address :</Text>
          </label>
          <InputField
            type="text"
            name="presentAddress"
            onChange={handleSubmit}
            value={data.presentAddress}
          />

          <Button
            className="primary"
            type="submit"
            name="submit"
            value="Register"
          >
            Sign Up
          </Button>
        </form>
      </Card>
    </Container>
  );
};

import React from "react";
import { Text, Button, Card, Input } from "../components";
import { Container } from "../globalstyles";

export const Login = () => {
  return (
    <Container>
      <Card>
        <Text>Usernaem :</Text>
        <Input />
        <Text>Password :</Text>
        <Input type='password'/>
        <Button>Login</Button>
      </Card>
    </Container>
  );
};
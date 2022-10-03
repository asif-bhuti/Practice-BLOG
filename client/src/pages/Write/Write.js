import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Header, Text, Input } from "../../components";
import {
  EditorContainer,
  StyledWrite,
  Content,
  Menu,
  Item,
} from "./Write.styled";

export const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <StyledWrite>
      <Content>
        <Input type={`text`} placeholder={`Title`} />
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </Content>
      <Menu>
        <Item>
          <Header>Publish</Header>

          <Text className={`title`}>Status:</Text>
          <Text>Draft</Text>
        </Item>
        <Item>i2</Item>
      </Menu>
    </StyledWrite>
  );
};

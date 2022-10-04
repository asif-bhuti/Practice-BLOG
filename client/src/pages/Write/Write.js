import React, { useState } from "react";
import { Header, Text, Input, Span, Button } from "../../components";
import {
  EditorContainer,
  StyledWrite,
  Content,
  Menu,
  Item,
  Label,
  TextField,
} from "./Write.styled";

export const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <StyledWrite>
      <Content>
        <Input type={`text`} placeholder={`Title`} />
        <TextField theme="snow" value={value} onChange={setValue} />
      </Content>

      <Menu>
        {/* Category Item*/}
        <Item>
          <Header>Category</Header>
          <Span>
            <input
              type={`radio`}
              className={`small`}
              name={`cat`}
              value={`art`}
              id={`art`}
            />
            <Label htmlFor="art">Art</Label>
          </Span>
          <Span>
            <input
              type={`radio`}
              className={`small`}
              name={`cat`}
              value={`sc`}
              id={`sc`}
            />
            <Label htmlFor="art">Science</Label>
          </Span>
          <Span>
            <input
              type={`radio`}
              className={`small`}
              name={`cat`}
              value={`tech`}
              id={`tech`}
            />
            <Label htmlFor="art">Technology</Label>
          </Span>
          <Span>
            <input
              type={`radio`}
              className={`small`}
              name={`cat`}
              value={`cine`}
              id={`cine`}
            />
            <Label htmlFor="art">Cinema</Label>
          </Span>
          <Span>
            <input
              type={`radio`}
              className={`small`}
              name={`cat`}
              value={`design`}
              id={`design`}
            />
            <Label htmlFor="art">Design</Label>
          </Span>
          <Span>
            <input
              type={`radio`}
              className={`small`}
              name={`cat`}
              value={`food`}
              id={`food`}
            />
            <Label htmlFor="art">Food</Label>
          </Span>
        </Item>
        {/* Publish Item */}
        <Item>
          <Header>Publish</Header>
          <Span>
            <Text className={`title`}>Status:</Text>
            <Text>Draft</Text>
          </Span>
          <Span>
            <Text className={`title`}>Visibility:</Text>
            <Text>Public</Text>
          </Span>
          <Input
            type={`file`}
            id={`file`}
            style={{ display: "none" }}
            name={``}
          />
          <Label htmlFor="file" className="button">
            Upload File
          </Label>
          <Span>
            <Button className={`primary small`}>Save as Draft</Button>
            <Button className={`secondary small`}>Update</Button>
          </Span>
        </Item>
      </Menu>
    </StyledWrite>
  );
};

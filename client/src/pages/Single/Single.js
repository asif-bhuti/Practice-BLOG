import React from "react";
import { Menu, Content } from "../../components";
import { ContentDiv, MenuDiv, SingleContainer } from "./Single.styled";

export const Single = () => {
  return (
    <SingleContainer>
      <ContentDiv>
        <Content>Content</Content>
      </ContentDiv>
      <MenuDiv>
        <Menu>Menu</Menu>
      </MenuDiv>
    </SingleContainer>
  );
};

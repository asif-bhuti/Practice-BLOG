import React from "react";
import { Menu } from "./Menu";
import { Content } from "./Content";
import { ContentDiv, MenuDiv, SingleContainer } from "./Single.styled";

export const Single = () => {
  return (
    <SingleContainer>
      <ContentDiv>
        <Content></Content>
      </ContentDiv>
      <MenuDiv>
        <Menu></Menu>
      </MenuDiv>
    </SingleContainer>
  );
};

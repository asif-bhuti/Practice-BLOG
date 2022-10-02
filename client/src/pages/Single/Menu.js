import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Card, Img, Text } from "../../components";
import { Header } from "../../components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
`;
const Blogs = styled.div``;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.textdark};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: ${({ theme }) => theme.color.header};
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
    color: #2d3436;
    &:hover {
      border: 2px solid ${({ theme }) => theme.color.foreground};
      border-radius: 5px;
      color: ${({ theme }) => theme.color.primary};
      transition: all 0.3s ease;
    }
  }
`;

export const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://i.pinimg.com/564x/dd/8e/85/dd8e85bf67e4e78579d08861a8033643.jpg",
    },
    {
      id: 2,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://i.pinimg.com/564x/89/e8/08/89e808d6d2ceb8bc4373746cfe8dc6d3.jpg",
    },
    {
      id: 3,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://i.pinimg.com/564x/9d/8a/1f/9d8a1f2d215cd50402eef5c5bb08c83a.jpg",
    },
  ];

  return (
    <StyledMenu>
      <Header className={`small`}>Other posts you may like :</Header>
      <Blogs>
        {posts.map((post) => (
          <StyledLink to={`/post/${post.id}`} key={post.id}>
            <Card className={`small`}>
              {" "}
              <Img src={post.img} alt="blog img" />
              <Text className="title">{post.title}</Text>
              <Text>{post.desc}</Text>
              <Button className={`secondary`}> Read More</Button>
            </Card>
          </StyledLink>
        ))}
      </Blogs>
    </StyledMenu>
  );
};

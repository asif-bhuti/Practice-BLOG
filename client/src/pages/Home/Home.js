import React from "react";
import { Text, Card, Button, Img } from "../../components";
import { ContainerHome, StyledLink } from "./Home.styled";

export const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://learn.coderslang.com/js-test-8.png",
    },
    {
      id: 2,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://learn.coderslang.com/js-test-8.png",
    },
    {
      id: 3,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://learn.coderslang.com/js-test-8.png",
    },
  ];
  return (
    <div>
      <ContainerHome>
        {posts.map((post) => (
          <StyledLink to={`/post/${post.id}`} key={post.id}>
            <Card className={`sm`}>
              {" "}
              <Img src={post.img} alt="blog img" />
              <Text className="title">{post.title}</Text>
              <Text>{post.desc}</Text>
              <Button className={`secondary`}> Read More</Button>
            </Card>
          </StyledLink>
        ))}
      </ContainerHome>
    </div>
  );
};

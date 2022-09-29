import React from "react";
import { Link } from "react-router-dom";
import { Text, Card, Button } from "../components";
import { Container } from "../components/styles/globalstyles";

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
      <div>
        {posts.map((post) => (
          <Container key={post.id}>
            <Card>
              <img src={post.img} alt="blog img" />
              <Link to={`/post/${post.id}`}>
                <Text className="title">{post.title}</Text>
              </Link>
              <Text>{post.desc}</Text>
              <Button className={`secondary`}> Read More</Button>
            </Card>
          </Container>
        ))}
      </div>
    </div>
  );
};

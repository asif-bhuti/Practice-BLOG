import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import { Text, Img, Header, Button, Card } from "../../components";
import {
  SingleContainer,
  Content,
  User,
  Info,
  IconEdit,
  IconDelete,
  Blog,
  Menu,
  Blogs,
  StyledLink,
} from "./Single.styled";

export const Single = () => {
  //Hard coded infos that will be fetched from API
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
    {
      id: 4,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://i.pinimg.com/564x/9d/8a/1f/9d8a1f2d215cd50402eef5c5bb08c83a.jpg",
    },
  ];

  return (
    <SingleContainer>
      <Content>
        <Img
          src={`https://i.pinimg.com/564x/b7/23/5a/b7235a0f8f29536161bfe40cf1ad5d4a.jpg`}
          className={`big`}
        />
        <User>
          <Img
            src={`https://i.pinimg.com/564x/cd/b8/a4/cdb8a4c64b65174b1e184c9de93eee51.jpg`}
            className={`small`}
          />
          <Info>
            <Text>Asif Vudi</Text>
            <Text className={`small`}>Posted 2 days ago</Text>
          </Info>
          <IconEdit to={`/write?eidt=2`}>
            <FaEdit />
          </IconEdit>
          <IconDelete>
            <FaTimes />
          </IconDelete>
        </User>
        <Blog>
          <Header className={`large`}>Lorem ipsum dolor sit amet.</Header>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aliquam sunt corporis explicabo ipsa optio voluptate voluptatibus
            distinctio consequatur veritatis minus vitae mollitia eaque, ullam
            dolor odio quod odit nostrum possimus placeat dignissimos. Sunt
            veniam veritatis sequi impedit, tempore corporis repellendus
            expedita suscipit amet mollitia qui quisquam fugit illum et nostrum
            maxime eius voluptas? Voluptates accusamus saepe eveniet soluta
            praesentium, sit excepturi aliquid maiores, perspiciatis debitis,
            natus ab quia rem molestiae alias. Mollitia incidunt tempore
            repellat odio recusandae quaerat molestiae voluptatum doloremque,
            quasi iste id, et minima atque! Quod perferendis assumenda laborum
            beatae architecto? Quas magni possimus alias? Exercitationem,
            possimus libero nesciunt voluptas eligendi optio quia, architecto ab
            deleniti, quas repellendus ad. Atque porro doloremque illo sint ipsa
            placeat debitis provident impedit suscipit repudiandae beatae dolor
            eveniet, expedita similique minus, possimus ipsam eligendi, minima
            id veritatis eum ipsum. Quia labore aspernatur natus aut. Assumenda,
            commodi mollitia distinctio eius fugit quod blanditiis temporibus
            qui molestiae alias ducimus porro modi soluta nostrum, cupiditate
            eos facere repudiandae? Nisi id repellat sunt molestiae, aliquid
            aliquam praesentium! Ratione commodi modi cum, enim saepe omnis sed
            illo vitae maiores tenetur totam corrupti voluptates hic consequatur
            deleniti itaque aut sint nam rerum, veritatis vel odio perferendis?
            Possimus fugiat enim in illo eum at delectus, voluptatibus ex!
            Voluptatibus, iusto ex. Dolores, quo odit. Fugiat adipisci quis
            maxime totam itaque obcaecati nam rerum explicabo, assumenda iusto
            deleniti, suscipit nisi iste possimus exercitationem natus aperiam
            placeat illo voluptatem omnis voluptatibus modi repellendus? Quas
            soluta quidem quasi eius libero consequatur veniam!
          </Text>
        </Blog>
      </Content>{" "}
      <Menu>
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
      </Menu>
    </SingleContainer>
  );
};

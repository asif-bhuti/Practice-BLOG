import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaEdit, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Img, Text, Header } from "../../components";

const StyledContent = styled.div`
  background-color: ${({ theme }) => theme.color.foreground};
  padding: 20px;
  border-radius: 10px;
`;
const User = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
`;
const Info = styled.div`
  margin: 2px;
`;
const IconEdit = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.ok};
  color: ${({ theme }) => theme.color.background};
  text-decoration: none;
  font-size: 2rem;
  padding: 5px;
  height: 100%;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.ok};
  }
`;
const IconDelete = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.background};
  text-decoration: none;
  font-size: 2rem;
  padding: 5px;
  height: 100%;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.error};
  }
`;
const Blog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20;
  margin: 20px 0;
`;

export const Content = () => {
  return (
    <StyledContent>
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
          dolor odio quod odit nostrum possimus placeat dignissimos. Sunt veniam
          veritatis sequi impedit, tempore corporis repellendus expedita
          suscipit amet mollitia qui quisquam fugit illum et nostrum maxime eius
          voluptas? Voluptates accusamus saepe eveniet soluta praesentium, sit
          excepturi aliquid maiores, perspiciatis debitis, natus ab quia rem
          molestiae alias. Mollitia incidunt tempore repellat odio recusandae
          quaerat molestiae voluptatum doloremque, quasi iste id, et minima
          atque! Quod perferendis assumenda laborum beatae architecto? Quas
          magni possimus alias? Exercitationem, possimus libero nesciunt
          voluptas eligendi optio quia, architecto ab deleniti, quas repellendus
          ad. Atque porro doloremque illo sint ipsa placeat debitis provident
          impedit suscipit repudiandae beatae dolor eveniet, expedita similique
          minus, possimus ipsam eligendi, minima id veritatis eum ipsum. Quia
          labore aspernatur natus aut. Assumenda, commodi mollitia distinctio
          eius fugit quod blanditiis temporibus qui molestiae alias ducimus
          porro modi soluta nostrum, cupiditate eos facere repudiandae? Nisi id
          repellat sunt molestiae, aliquid aliquam praesentium! Ratione commodi
          modi cum, enim saepe omnis sed illo vitae maiores tenetur totam
          corrupti voluptates hic consequatur deleniti itaque aut sint nam
          rerum, veritatis vel odio perferendis? Possimus fugiat enim in illo
          eum at delectus, voluptatibus ex! Voluptatibus, iusto ex. Dolores, quo
          odit. Fugiat adipisci quis maxime totam itaque obcaecati nam rerum
          explicabo, assumenda iusto deleniti, suscipit nisi iste possimus
          exercitationem natus aperiam placeat illo voluptatem omnis
          voluptatibus modi repellendus? Quas soluta quidem quasi eius libero
          consequatur veniam!
        </Text>
      </Blog>
    </StyledContent>
  );
};

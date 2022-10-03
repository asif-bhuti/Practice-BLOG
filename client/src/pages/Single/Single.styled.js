import styled from "styled-components";
import { Container } from "../../components/styles/globalstyles";
import { Link } from "react-router-dom";

export const SingleContainer = styled(Container)`
  gap: 50px;
  align-items: flex-start;
  margin: 20px 0;
  ${Container}
`;

//Content Container
export const Content = styled.div`
  flex: 5;
  background-color: ${({ theme }) => theme.color.foreground};
  padding: 20px;
  border-radius: 10px;
`;
export const User = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
`;
export const Info = styled.div`
  margin: 2px;
`;
export const IconEdit = styled(Link)`
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
export const IconDelete = styled(Link)`
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
export const Blog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20;
  margin: 20px 0;
`;

//Menu Container
export const Menu = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const Blogs = styled.div`
  overflow: scroll;
`;

export const StyledLink = styled(Link)`
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

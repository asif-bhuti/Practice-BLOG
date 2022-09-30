import styled from "styled-components";
import { Container } from "../../components/styles/globalstyles";
import { Card } from "../../components";

export const ContainerHome = styled(Container)`
  ${Container}
`;

import { Link } from "react-router-dom";

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

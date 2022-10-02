import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";

export const FooterContainer = styled.nav`
  background: ${({ theme }) => theme.color.primary};
  width: 100%;
  display: flex;
  padding: 20px 20px;
  align-items: center;
  position: sticky;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
  text-align: left;
`;

export const FooterLeft = styled.div`
  width: 40%;
  padding: 20px;
  display: inline-block;
  vertical-align: top;
`;

export const FooterRight = styled.div`
  width: 25%;
  padding: 20px;
  display: inline-block;
  vertical-align: top;
`;

export const FooterCentre = styled.div`
  width: 35%;
  padding: 20px;
  display: inline-block;
  vertical-align: top;
`;

export const FooterLogo = styled(Link)`
  color: ${({ theme }) => theme.color.textlight};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const FooterMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  list-style: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #eee;
  }
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.color.textlight};
  text-decoration: none;
  padding: 0.5rem;
  margin: 1rem 0;
  height: 100%;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
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

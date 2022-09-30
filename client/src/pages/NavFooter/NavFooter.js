import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { ContainerNavFooter } from "./NavFooter.styled";

export const NavFooter = () => {
  return (
    <ContainerNavFooter>
      <Navbar />
      <Outlet />
      <Footer />
    </ContainerNavFooter>
  );
};

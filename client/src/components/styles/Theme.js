import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  name: "main-theme",
  color: {
    primary: "#00848c",
    primaryDark: "#037272",
    secondary: "#fccf17",
    secondaryDark: "#fec20f",
    header: "#1c1f4c",
    background: "#eee",
    foreground: "#f9f9f9",
    textlight: "#f9f9f9",
    textdark: "#25182e",
    red: "red",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  name: "main-theme",
  color: {
    primary: "#ffbe00",
    secondary: "#ca1f3d",
    header: "#25182e",
    background: "#eee",
    foreground: "f9f9f9",
    textdark: "#25182e",
    textlight: "#f9f9f9",
    red: "red",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

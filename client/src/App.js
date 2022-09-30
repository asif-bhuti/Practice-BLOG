import React from "react";
import GlobalStyle, { Container } from "./components/styles/globalstyles";
import Theme from "./components/styles/Theme";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NavFooter, Home, Login, Register, Single, Write } from "./pages";

//the router starts here
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavFooter />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Single /> },
      { path: "/write", element: <Write /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

//the beginning of the app
function App() {
  return (
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  );
}

export default App;

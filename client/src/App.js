import React from "react";
import GlobalStyle from "./styles/globalstyles";
import Theme from "./styles/Theme";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Login, Register, Single, Write } from "./pages";

//Layout Element for Navbar and Footer
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

//the router starts here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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

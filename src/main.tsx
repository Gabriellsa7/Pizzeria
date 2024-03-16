import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import InitialPage from "./pages/InitialPage/index.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import Theme, { Global } from "./styles/styles.ts";
import SignIn from "./pages/SignIn/index.tsx";
import SignUp from "./pages/SignUp/index.tsx";
import Home from "./pages/Home/index.tsx";
import Profile from "./pages/Profile/index.tsx";
import { Categories } from "./pages/Categories/index.tsx";
import ShoppingCart from "./pages/ShoppingCart/index.tsx";
import PizzaDetails from "./pages/PizzaDetails/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <InitialPage />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />,
      },
      {
        path: "/pizzaDetails",
        element: <PizzaDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Global />
  </ThemeProvider>
);

import React from "react";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/join",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import React from "react";
import SignLayout from "./components/Layout/SignLayout";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/sign",
    element: <SignLayout></SignLayout>,
    // errorElement: <Error />,
    children: [
      { path: "in", element: <SignIn /> },
      { path: "up", element: <SignUp /> },
    ],
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

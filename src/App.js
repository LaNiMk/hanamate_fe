import React from "react";
import SignLayout from "./components/Layout/SignLayout";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

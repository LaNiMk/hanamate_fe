import React from "react";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notification from "./Pages/Notification/Notification";
import Menu from "./Pages/Menu/Menu";
import RootLayout from "./components/Layout/RootLayout";
import Calendar from "./Pages/Calendar/Calendar";

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
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "notification", element: <Notification /> },
      { path: "calendar", element: <Calendar /> },
      { path: "menu", element: <Menu /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

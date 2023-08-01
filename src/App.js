import React from "react";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notification from "./Pages/Notification/Notification";
import Menu from "./Pages/Menu/Menu";
import RootLayout from "./components/Layout/RootLayout";
import Calendar from "./Pages/Calendar/Calendar";
import InputMoney from "./components/InputMoney/InputMoney";
import AllowanceAskingMember from "./Pages/Allowance/AllowanceAskingMember";
import AskSend from "./Pages/AskSend/AskSend";
import AllowanceCheck from "./Pages/Allowance/AllowanceCheck";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <SignIn /> },
      { path: "join", element: <SignUp /> },
      { path: "notification", element: <Notification /> },
      { path: "calendar", element: <Calendar /> },
      { path: "menu", element: <Menu /> },
      { path: "input", element: <InputMoney /> },
      { path: "ask", element: <AllowanceAskingMember /> },
      { path: "send", element: <AskSend /> },
      { path: "allowance/check", element: <AllowanceCheck /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

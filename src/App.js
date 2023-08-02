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
import AllowanceAskMember from "./Pages/Allowance/AllowanceAskMember";
import AskSend from "./Pages/AskSend/AskSend";
import AllowanceHistory from "./Pages/Allowance/AllowanceHistory";
import Allowance from "./Pages/Allowance/Allowance";
import AllowanceFill from "./Pages/Allowance/AllowanceFill";
import AllowanceAskSetAmount from "./Pages/Allowance/AllowanceAskSetAmount";

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
      {
        path: "allowance",
        children: [
          { index: true, element: <Allowance /> },
          {
            path: "ask",
            children: [
              { index: true, element: <AllowanceAskMember /> },
              { path: "set", element: <AllowanceAskSetAmount /> },
            ],
          },
          { path: "send", element: <AskSend /> },
          { path: "check", element: <AllowanceHistory /> },
          { path: "fill", element: <AllowanceFill /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

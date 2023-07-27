import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet></Outlet>
    </Fragment>
  );
};

export default RootLayout;

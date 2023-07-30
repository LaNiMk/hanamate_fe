import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import classes from "./RootLayout.module.css";

const RootLayout = (props) => {
  return (
    <div className={classes.outerBox}>
      <div className={classes.innerBox}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;

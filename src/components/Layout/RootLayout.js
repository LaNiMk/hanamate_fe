import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";
import Footer from "./Footer";

const RootLayout = (props) => {
  return (
    <div className={classes.outerBox}>
      <div className={classes.fixedBox} />
      <div className={classes.innerBox}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;

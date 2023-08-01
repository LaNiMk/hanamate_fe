import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";

const RootLayout = (props) => {
  return (
    <div className={classes.outerBox}>
      <div className={classes.fixedBox} />
      <div className={classes.innerBox}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

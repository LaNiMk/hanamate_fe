import { Outlet } from "react-router-dom";
import classes from "./SignLyaout.module.css";
import MainIcon from "../../assets/MainIcon.gif";

const SignLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <img src={MainIcon} alt="mainIcon" />
      </div>
      <Outlet />
    </div>
  );
};

export default SignLayout;

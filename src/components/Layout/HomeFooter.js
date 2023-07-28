import { Link } from "react-router-dom";
import classes from "./HomeFooter.module.css";
import Home from "../../assets/letter-b.png";
import Notification from "../../assets/notification.png";
import Menu from "../../assets/menu.png";

const HomeFooter = () => {
  return (
    <div className={classes.footerBox}>
      <div className={classes.navigationBox}>
        <Link to="/notification">
          <img
            className={classes.navigationIcon}
            src={Notification}
            alt="notification"
          />
        </Link>
        <Link to="/">
          <img className={classes.navigationIcon} src={Home} alt="home" />
        </Link>
        <Link to="/menu">
          <img className={classes.navigationIcon} src={Menu} alt="menu" />
        </Link>
      </div>
    </div>
  );
};

export default HomeFooter;

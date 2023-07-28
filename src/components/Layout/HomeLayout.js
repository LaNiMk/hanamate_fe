import HomeFooter from "./HomeFooter";
import classes from "./HomeLayout.module.css";

const HomeLayout = (props) => {
  return (
    <div className={classes.homeLayout}>
      <div className={classes.outerBox}>
        {/* <div className={classes.background} /> */}
        <div className={classes.innerBox}>{props.children}</div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default HomeLayout;

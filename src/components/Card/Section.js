import { FiChevronRight } from "react-icons/fi";
import classes from "./Section.module.css";

const Module = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.titleBox}>
        <p className={classes.title}>{props.title}</p>
        {props.seeMore && (
          <button className={classes.seeMore}>
            <p className={classes.seeMoreText}>{props.seeMoreText}</p>
            <FiChevronRight size="1.2rem" />
          </button>
        )}
      </div>
      {props.children}

      <div className={classes.contentBox}>
        {props.alert && (
          <div className={classes.alertBox}>
            느낌표
            <p className={classes.alertMessage}>아직 활동이 없네요</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Module;

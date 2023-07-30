import { Fragment } from "react";
import classes from "./TempHeader.module.css";

const TempHeader = (props) => {
  return (
    <Fragment>
      {props.loading ? (
        <div className={classes.temp}>Loading...</div>
      ) : props.auth ? (
        <div className={classes.temp}>
          <h1>{props.name}님 안녕하세요.</h1>
        </div>
      ) : (
        <div className={classes.temp}>
          <h1>{props.message}</h1>
          <h1>You are not Authorized</h1>
        </div>
      )}
    </Fragment>
  );
};

export default TempHeader;

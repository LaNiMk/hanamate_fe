import React from "react";

import classes from "./SignButton.module.css";

const SignButton = (props) => {
  return (
    <button
      className={classes.signButton}
      type={props.type || "submit"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default SignButton;

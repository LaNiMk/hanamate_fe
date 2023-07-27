import React, { Fragment } from "react";

import { Link, useNavigate } from "react-router-dom";
import classes from "./Home.module.css";

const Home = (props) => {
  const navigate = useNavigate();

  // 프로그램적으로 강제 이동시키기
  const navigateHandler = () => {
    navigate("signin");
  };

  return (
    <Fragment>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="signup">Sign Up</Link>
      </p>
      <div className={classes.box}>
        <p>
          <button onClick={navigateHandler} className={classes.button1}>
            버튼
          </button>
        </p>
      </div>
    </Fragment>
  );
};

export default Home;

import { Fragment } from "react";
import classes from "./HomeHeader.module.css";
import { useNavigate } from "react-router-dom";
import CoinIcon from "../../assets/coin.png";

const HomeHeader = (props) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      {props.loading ? (
        <div>Loading...</div>
      ) : props.auth ? (
        <div
          style={{
            textAlign: "center",
            margin: "1rem 0 1rem 0",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
          }}
        >
          <h1>You are Authorized {props.name}</h1>
        </div>
      ) : (
        <div>
          <h1>{props.message}</h1>
          <h1>You are not Authorized</h1>
        </div>
      )}
      {!props.auth ? (
        <header
          className={classes.startTitle}
          onClick={() => navigate("/login")}
        >
          지금 바로
          <br />
          하나 메이트 시작하기
        </header>
      ) : (
        <header className={classes.headerButton}>
          <div className={classes.iconContainer}>
            <img src={CoinIcon} className={classes.coinIcon} alt="coin" />
          </div>
          <span>&nbsp;내 지갑 100,000</span>
        </header>
      )}
    </Fragment>
  );
};

export default HomeHeader;

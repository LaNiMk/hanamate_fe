import { Fragment } from "react";
import classes from "./AllowanceAskSetAmount.module.css";
import Header from "../../components/Layout/Header";
import Coin from "../../assets/coin-2.png";

const AllowanceAskSetAmount = () => {
  return (
    <Fragment>
      <Header left="back" title="용돈 조르기" right="cancel" />
      <div className={classes.container}>
        <section className={classes.firstSection}>
          <p className={classes.title}>얼마를 달라고 할까요?</p>
          <img className={classes.icon} src={Coin} alt="coin" />
        </section>
      </div>
    </Fragment>
  );
};

export default AllowanceAskSetAmount;

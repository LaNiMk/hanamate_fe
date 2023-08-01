import classes from "./InputMoney.module.css";
import Header from "../Layout/Header";
import { Fragment } from "react";
import { Form } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import HomeButton from "../Button/HomeButton";
import SignButton from "../Button/SignButton";

const InputMoney = (props) => {
  return (
    <Fragment>
      <Header title="용돈 보내기" />
      <div className={classes.container}>
        <section className={classes.firstSection}>
          <h1>얼마를 달라고 할까요?</h1>
          <Form className={classes.number}>
            <p>
              <strong>1000</strong>원
            </p>
            <input type="hidden" value="1000원" />
          </Form>
        </section>
        <section className={classes.secondSection}>
          <div className={classes.buttonContainer}>
            <button>+ 백원</button>
            <button>+ 천원</button>
            <button>+ 만원</button>
          </div>
          <div className={classes.numberContainer}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>00</button>
            <button>0</button>
            <button>
              <AiOutlineArrowLeft />
            </button>
          </div>
          <div className={classes.nextContainer}>
            <SignButton>다음</SignButton>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default InputMoney;

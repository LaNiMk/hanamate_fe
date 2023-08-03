import classes from "./InputMoney.module.css";
import Header from "../Layout/Header";
import { Fragment, useState } from "react";
import { Form, json, redirect } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SignButton from "../Button/SignButton";

const InputMoney = (props) => {
  const [amount, setAmount] = useState("0");

  const plusMath = (number) => {
    if (Number(amount) + number >= Number(props.balance)) {
      setAmount(props.balance);
    } else {
      setAmount(String(Number(amount) + number));
    }
  };

  const addNumber = (number) => {
    if (Number(amount + number) >= Number(props.balance)) {
      setAmount(props.balance);
    } else {
      setAmount((prevPhoneNumber) => prevPhoneNumber + number);
    }
  };

  const deleteNumber = () => {
    setAmount((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
  };

  return (
    <Fragment>
      <Header left="back" title={props.title} right="blank" />
      <div className={classes.container}>
        <section className={classes.firstSection}>
          <h1>{props.message}</h1>
          <Form method="POST" className={classes.number}>
            <p>
              <strong>{amount === "" ? "0" : Number(amount).toLocaleString()}</strong>원
            </p>
            <input type="hidden" name="amount" value={Number(amount)} />
          </Form>
          {props.subMessage && (
            <p className={classes.subMessage}>
              {props.subMessage} {Number(props.balance).toLocaleString()}원
            </p>
          )}
        </section>
        <section className={classes.secondSection}>
          <div className={classes.buttonContainer}>
            <button onClick={() => plusMath(100)}>+ 백원</button>
            <button onClick={() => plusMath(1000)}>+ 천원</button>
            <button onClick={() => plusMath(10000)}>+ 만원</button>
          </div>
          <div className={classes.numberContainer}>
            <button onClick={() => addNumber("1")}>1</button>
            <button onClick={() => addNumber("2")}>2</button>
            <button onClick={() => addNumber("3")}>3</button>
            <button onClick={() => addNumber("4")}>4</button>
            <button onClick={() => addNumber("5")}>5</button>
            <button onClick={() => addNumber("6")}>6</button>
            <button onClick={() => addNumber("7")}>7</button>
            <button onClick={() => addNumber("8")}>8</button>
            <button onClick={() => addNumber("9")}>9</button>
            <button onClick={() => addNumber("00")}>00</button>
            <button onClick={() => addNumber("0")}>0</button>
            <button onClick={deleteNumber} type="submit">
              <AiOutlineArrowLeft />
            </button>
          </div>
          <div className={classes.nextContainer}>
            <SignButton>{props.buttonMessage}</SignButton>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default InputMoney;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const requestData = {
    amount: data.get("amount"),
  };

  let url = "https://hanamate.onrender.com/fill";
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  console.log(response.data.Status);

  return redirect("/");
}

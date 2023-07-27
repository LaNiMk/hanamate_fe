import React, { useState } from "react";
import Input from "../../components/Input/Input";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";

const validateID = (id) => {
  return /^[a-z0-9_-]{5,20}$/.test(id);
};
const validatePW = (pw) => {
  return /^[a-zA-Z\d@!#$%^&*]{8,16}$/.test(pw);
};

const SignIn = () => {
  const { isValid: idIsValid, valueChangeHandler: idChangeHandler } =
    useInput(validateID);

  const { isValid: pwIsValid, valueChangeHandler: pwChangeHandler } =
    useInput(validatePW);

  const [formIsValid, setFormIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(idIsValid && pwIsValid);
    if (idIsValid && pwIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
      <h1>HANAMATE</h1>
      <Input
        type="text"
        id="ID"
        name="ID"
        label="ID"
        placeholder="아이디"
        required={true}
        onChange={idChangeHandler}
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="password"
        placeholder="비밀번호"
        required={true}
        onChange={pwChangeHandler}
      />
      {!formIsValid && (
        <div className={classes["error-message__container"]}>
          <p className={classes["error-message"]}>
            아이디 또는 비밀번호를 다시 입력해주세요.
          </p>
        </div>
      )}

      <button type="submit">로그인</button>
      <div className={classes.helperContainer}>
        <Link to="/help/idInquiry">아이디 찾기</Link>
        <Link to="/help/pwInquiry">비밀번호 찾기</Link>
        <Link to="/sign/up">회원가입</Link>
      </div>
    </form>
  );
};

export default SignIn;

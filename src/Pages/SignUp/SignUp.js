import React, { useState, useEffect } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import classes from "./SignUp.module.css";
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";

const validateName = (name) => {
  return /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z\s]+$/.test(name);
};
const validatePhone = (phone) => {
  return /^[0-9]+$/.test(phone);
};
const validateID = (id) => {
  return /^[a-z0-9_-]{5,20}$/.test(id);
};
const validatePW = (pw) => {
  return /^[a-zA-Z\d@!#$%^&*]{8,16}$/.test(pw);
};
const validateConfirmation = (pw1, pw2) => {
  return pw1 === pw2;
};

const SignUp = (props) => {
  const navigate = useNavigate();
  const {
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(validateName);
  const {
    isValid: phoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(validatePhone);
  const {
    isValid: idIsValid,
    hasError: idInputHasError,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
  } = useInput(validateID);
  const {
    value: pwValue,
    isValid: pwIsValid,
    hasError: pwInputHasError,
    valueChangeHandler: pwChangeHandler,
    inputBlurHandler: pwBlurHandler,
  } = useInput(validatePW);
  const {
    isValid: confirmationIsValid,
    hasError: confirmationInputHasError,
    valueChangeHandler: confirmationChangeHandler,
    inputBlurHandler: confirmationBlurHandler,
  } = useInput((value) => validateConfirmation(value, pwValue));

  const [formIsValid, setFormIsValid] = useState(true);

  useEffect(() => {
    if (
      nameIsValid &&
      phoneIsValid &&
      idIsValid &&
      pwIsValid &&
      confirmationIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid, phoneIsValid, idIsValid, pwIsValid, confirmationIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      navigate("/sign/in");
    }
  };

  const [userType, setUserType] = useState("");
  const [childrenButtonClass, setChildrenButtonClass] = useState(
    classes["selected"]
  );
  const [parentsButtonClass, setParentsButtonClass] = useState("");

  const parentsHandler = () => {
    setUserType("parents");
    setChildrenButtonClass("");
    setParentsButtonClass(classes["selected"]);
  };

  const childrenHandler = () => {
    setUserType("children");
    setChildrenButtonClass(classes["selected"]);
    setParentsButtonClass("");
  };

  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
      <h1>HANAMATE</h1>
      <div className={classes.typeSelector}>
        <button className={childrenButtonClass} onClick={childrenHandler}>
          아이
        </button>
        <button className={parentsButtonClass} onClick={parentsHandler}>
          부모
        </button>
      </div>
      <Input
        type="text"
        id="name"
        name="name"
        label="name"
        placeholder="이름 *"
        required={true}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        error={nameInputHasError}
        errorMessage="이름을 다시 입력해주세요."
      />
      <Input
        type="number"
        pattern="[0-9]*"
        id="phone"
        name="phone"
        label="phone"
        placeholder="연락처 (- 없이 숫자만 입력) *"
        required={true}
        onChange={phoneChangeHandler}
        onBlur={phoneBlurHandler}
        error={phoneInputHasError}
        errorMessage="전화번호를 다시 입력해주세요."
      />
      <Input
        type="text"
        id="ID"
        name="ID"
        label="ID"
        placeholder="아이디 *"
        required={true}
        onChange={idChangeHandler}
        onBlur={idBlurHandler}
        error={idInputHasError}
        errorMessage="아이디를 다시 입력해주세요."
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="password"
        placeholder="비밀번호 *"
        required={true}
        onChange={pwChangeHandler}
        onBlur={pwBlurHandler}
        error={pwInputHasError}
        errorMessage="8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요."
      />
      <Input
        type="password"
        id="confirmation"
        name="confirmation"
        label="confirmation"
        placeholder="비밀번호 확인 *"
        required={true}
        onChange={confirmationChangeHandler}
        onBlur={confirmationBlurHandler}
        error={confirmationInputHasError}
        errorMessage="비밀번호가 일치하지 않습니다."
      />
      <input
        type="hidden"
        id="userType"
        name="userType"
        label="userType"
        value={userType}
      />
      <Button disabled={!formIsValid}>회원가입</Button>
    </form>
  );
};

export default SignUp;

import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import classes from "./SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import axios from "axios";
import SignLayout from "../../components/Layout/SignLayout";
import SignButton from "../../components/Button/SignButton";

const validateID = (id) => {
  return /^[a-z0-9_-]{5,20}$/.test(id);
};
const validatePW = (pw) => {
  return /^[a-zA-Z\d@!#$%^&*]{8,16}$/.test(pw);
};

const SignIn = () => {
  const {
    value: idValue,
    isValid: idIsValid,
    valueChangeHandler: idChangeHandler,
  } = useInput(validateID);

  const {
    value: pwValue,
    isValid: pwIsValid,
    valueChangeHandler: pwChangeHandler,
  } = useInput(validatePW);

  const [values, setValues] = useState({
    id: "",
    pw: "",
  });
  const [shouldSendRequest, setShouldSendRequest] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const submitHandler = (event) => {
    event.preventDefault();
    setFormIsValid(idIsValid && pwIsValid);
    if (!formIsValid) {
      return;
    }

    setValues((prevValues) => ({
      ...prevValues,
      id: idValue,
      pw: pwValue,
    }));
    setShouldSendRequest(true);
  };

  useEffect(() => {
    if (shouldSendRequest && formIsValid) {
      axios

        .post("https://hanamate.onrender.com//sign/in", values)
        // .post("http://localhost:8080/sign/in", values)
        // .post("http://kzrcgaexjh.us18.qoddiapp.com/sign/in", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            console.log(values);
            alert(res.data.Status);
            navigate("/");
          } else {
            alert(res.data.Message);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setShouldSendRequest(false));
    }
  }, [values, shouldSendRequest, formIsValid, navigate]);

  return (
    <SignLayout>
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

        <SignButton type="submit">로그인</SignButton>
        <div className={classes.helperContainer}>
          <Link to="/help/idInquiry">아이디 찾기</Link>
          <Link to="/help/pwInquiry">비밀번호 찾기</Link>
          <Link to="/join">회원가입</Link>
        </div>
      </form>
    </SignLayout>
  );
};

export default SignIn;

// submitHandler에서 setValues 이후, 업데이트 된 최신 상태로 axios.post 요청을 보내고 싶어

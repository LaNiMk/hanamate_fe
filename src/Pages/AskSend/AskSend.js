import classes from "./AskSend.module.css";
import LoveLetter from "../../assets/love-letter.png";
import { Fragment } from "react";
import Header from "../../components/Layout/Header";
import SignButton from "../../components/Button/SignButton";
import InputBox from "../../components/Input/InputBox";
import Footer from "../../components/Layout/Footer";

const AskSend = (props) => {
  return (
    <Fragment>
      <Header left="back" title="용돈 조르기" right="cancel" />
      <section className={classes.firstSection}>
        <div className={classes.upper}>
          <p className={classes.title}>
            <strong>강민경</strong>님에게
            <br />
            <strong>13,000</strong>원을 요청할게요
          </p>
          <p className={classes.subTitle}>추가 메시지를 입력해 줄래요?</p>
          <div className={classes.card}>
            <div className={classes.imageBox}>
              <img src={LoveLetter} alt="love-letter" />
            </div>
            <InputBox placeholder="하고 싶은 말을 적어봐요!" />
          </div>
        </div>
        <SignButton>조르기 20번 남았어요</SignButton>
      </section>
      <Footer />
    </Fragment>
  );
};

export default AskSend;

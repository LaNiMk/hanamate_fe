import classes from "./AskSend.moudle.css";
import LoveLetter from "../../assets/love-letter.png";
import { Fragment } from "react";
import Header from "../../components/Layout/Header";
import { FiChevronLeft } from "react-icons/fi";
import SignButton from "../../components/Button/SignButton";
import InputBox from "../../components/Input/InputBox";

const AskSend = (props) => {
  return (
    <Fragment>
      <Header left={<FiChevronLeft size="24" />} title="용돈 조르기" right="취소" />
      <section className={classes.firstSection}>
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
      </section>
      <SignButton>조르기 20번 남았어요</SignButton>
    </Fragment>
  );
};

export default AskSend;

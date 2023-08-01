import classes from "./AllowanceAskingMessage.moudle.css";
import LoveLetter from "../../assets/love-letter.png";
import { Fragment } from "react";
import Header from "../../components/Layout/Header";

const AllowanceAskingMessage = (props) => {
  return (
    <Fragment>
      <Header title="용돈 조르기" right="취소" />
    </Fragment>
  );
};

export default AllowanceAskingMessage;

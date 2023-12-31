import { Fragment } from "react";

import classes from "./AllowanceAskMember.module.css";
import Header from "../../components/Layout/Header";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import InputBox from "../../components/Input/InputBox";

const AllowanceAskMember = (props) => {
  return (
    <Fragment>
      <Header left="blank" title="누구에게 달라고 할래요?" right="cancel" />
      <section className={classes.firstSection}>
        <InputBox left={<PiMagnifyingGlassBold size="24" fill="#aaa" />} placeholder="부모멤버의 연락처를 검색해봐요" />
        <div className={classes.memberList}>
          <p className={classes.title}>즐겨찾는 멤버 1</p>
          <div className={classes.member}>
            <div className={classes.profile}>
              <AiOutlineUser size="40" />
              <div className={classes.namePhone}>
                <p className={classes.name}>강민경</p>
                <p className={classes.phone}>010-6259-5634</p>
              </div>
            </div>
            <FaCheck fill="#aaa" />
          </div>
        </div>
      </section>
      <div className={classes.line} />
      <section className={classes.SecondSection}></section>
    </Fragment>
  );
};

export default AllowanceAskMember;

import classes from "./HomeButtonBox.module.css";
import HomeButton from "./HomeButton";
import { Wallet2, PiggyBank, Bank, People, Wallet } from "react-bootstrap-icons";
import { FaPray, FaWallet } from "react-icons/fa";
import { BsBank2, BsFillPeopleFill } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { RiBankFill } from "react-icons/ri";
import { PiBankFill } from "react-icons/pi";

const HomeButtonBox = (props) => {
  return (
    <div className={classes.container}>
      {/* <p className={classes.title}>내 활동</p> */}
      <div className={classes.buttonContainer}>
        <HomeButton background="#5f4de9" icon={<FaWallet size="32" />} title="직접 관리하는" subTitle="내 지갑!" />
        <HomeButton background="#22a2c9" icon={<FaPray size="32" />} title="용돈 부족하면" subTitle="부탁해봐요!" />
        {/* <HomeButton background="#f88a24" icon={<PiBankFill size="32" />} title="진행 중인" subTitle="대출이 없네요" /> */}
        <HomeButton background="#f88a24" icon={<RiBankFill size="32" />} title="진행 중인" subTitle="대출이 없네요" />
        {/* <HomeButton background="#f88a24" icon={<AiFillBank size="32" />} title="진행 중인" subTitle="대출이 없네요" /> */}
        {/* <HomeButton background="#f88a24" icon={<BsBank2 size="32" />} title="진행 중인" subTitle="대출이 없네요" /> */}
        <HomeButton background="#fc2a6a" icon={<BsFillPeopleFill size="32" />} title="친구들과" subTitle="다 함께!" />
      </div>
    </div>
  );
};

export default HomeButtonBox;

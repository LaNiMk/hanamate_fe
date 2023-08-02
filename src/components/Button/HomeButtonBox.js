import classes from "./HomeButtonBox.module.css";
import HomeButton from "./HomeButton";
import { FaPray, FaWallet } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HomeButtonBox = (props) => {
  const navigate = useNavigate();
  const allowanceClickHandler = () => {
    navigate("allowance");
  };
  const askClickHandler = () => {
    navigate("allowance/ask");
  };
  const loanClickHandler = () => {
    navigate("loan");
  };
  const jointClickHandler = () => {
    navigate("joint");
  };

  return (
    <div className={classes.container}>
      {/* <p className={classes.title}>내 활동</p> */}
      <div className={classes.buttonContainer}>
        <HomeButton
          background="#5f4de9"
          icon={<FaWallet size="32" />}
          title="직접 관리하는"
          subTitle="내 지갑!"
          onClick={allowanceClickHandler}
        />
        <HomeButton
          background="#22a2c9"
          icon={<FaPray size="32" />}
          title="용돈 부족하면"
          subTitle="부탁해봐요!"
          onClick={askClickHandler}
        />
        <HomeButton
          background="#f88a24"
          icon={<RiBankFill size="32" />}
          title="진행 중인"
          subTitle="대출이 없네요"
          onClick={loanClickHandler}
        />
        <HomeButton
          background="#fc2a6a"
          icon={<BsFillPeopleFill size="32" />}
          title="친구들과"
          subTitle="다 함께!"
          onClick={jointClickHandler}
        />
      </div>
    </div>
  );
};

export default HomeButtonBox;

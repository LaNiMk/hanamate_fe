import { RiInformationFill } from "react-icons/ri";
import { FaWallet, FaPercentage, FaCoins, FaMoneyCheck } from "react-icons/fa";
import classes from "./Wallet.module.css";
import { useNavigate } from "react-router-dom";

const Wallet = (props) => {
  const navigate = useNavigate();
  const walletClickHandler = () => {
    navigate("check");
  };
  const fillClickHandler = () => {
    navigate("fill");
  };
  const notImplemented = () => {
    alert("아직 미구현 기능입니다 ㅜㅜ");
  };

  return (
    <div className={classes.wallet}>
      <div className={classes.firstRow}>
        <div className={classes.titleBox}>
          <p className={classes.subTitle}>남은 용돈</p>
          <p className={classes.title}>{Number(props.amount).toLocaleString()}원</p>
        </div>
        <div className={classes.iconBox}>
          <RiInformationFill fill="#a797eb" />
        </div>
      </div>
      <div className={classes.secondRow}>
        <button className={classes.walletButton} onClick={walletClickHandler}>
          <FaWallet size="32" fill="#f9f9f9" />
          <p>용돈 조회</p>
        </button>
        <button className={classes.walletButton} onClick={notImplemented}>
          <FaPercentage size="32" fill="#f9f9f9" />
          <p>더치페이</p>
        </button>
        <button className={classes.walletButton} onClick={notImplemented}>
          <FaCoins size="32" fill="#f9f9f9" />
          <p>보내기</p>
        </button>
        <button className={classes.walletButton} onClick={fillClickHandler}>
          <FaMoneyCheck size="32" fill="#f9f9f9" />
          <p>채우기</p>
        </button>
      </div>
    </div>
  );
};

export default Wallet;

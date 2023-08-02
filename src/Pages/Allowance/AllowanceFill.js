import classes from "./AllowanceFill.module.css";
import InputMoney from "../../components/InputMoney/InputMoney";

const AllowanceFill = () => {
  return <InputMoney title="충전하기" subMessage="충전계좌 잔액" balance="241,000" buttonMessage="충전하기" />;
};

export default AllowanceFill;

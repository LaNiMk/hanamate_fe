import React from "react";
import "./Card_wallet.css";
import Button from "./Button";
import Wallet from "../assets/wallet.png";
import Payment from "../assets/payment.png";
import Passbook from "../assets/passbook.png";
import MoneyTranfer from "../assets/money-transfer.png";

const Card = ({ title }) => {
  return (
    <section className="card">
      <div className="card-header">
        <h2>남은 돈</h2>
      </div>

      <p className="balance">{title}</p>

    {/* {props.type === "버튼한개" && <div className={}>{props.children}</div>}
    {props.type === "버튼네개" && <div className>{props.children}</div>}

      <Card type="버튼네개">
        <Button label="내 지갑" image={Wallet} />
        <Button label="대출" image={Payment} />
        <Button label="모임통장" image={Passbook} />
        <Button label="이체" image={MoneyTranfer} />
      </Card>

      <Card>
        <Button label="강민경" image={Wallet} onClick={"강민경지갑으로"} />
        <Button label="김민재" image={Payment} onClick={"김민재지갑으로"}  />
        <Button label="최안식" image={Passbook} />
        <Button label="민새미" image={MoneyTranfer} />
      </Card> */}


      <div className="card-buttons">
        <Button label="내 지갑" image={Wallet} />
        <Button label="대출" image={Payment} />
        <Button label="모임통장" image={Passbook} />
        <Button label="이체" image={MoneyTranfer} />
      </div>
    </section>
  );
};

export default Card;

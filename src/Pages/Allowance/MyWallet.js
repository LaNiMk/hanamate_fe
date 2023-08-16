import React, { Fragment, useState } from "react";
import classes from "./MyWallet.module.css";
import Card from "../../components/Card_wallet";
import Header from "../../components/Layout/Header";

const transactions = [
  { date: "2023년 08월", amont: "+5,0000원", category: "입금" },
  { date: "2023년 08월", amount: "-20,000원", category: "지출" },
  { date: "2023년 08월", amount: "+100,000원", category: "입금" },
  { date: "2023년 09월", amount: "-30,000원", category: "지출" },
];

const MyWallet = () => {
  const [balance, setBalance] = useState(0);

  const [currentMonth, setCurrentMonth] = useState(8); // 초기값은 8월

  const handleGoBackWallet = () => {
    // MyWallet 페이지에서의 이전 페이지로 이동 로직 구현
  };

  const handlePrevMonth = () => {
    if (currentMonth > 1) {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <Fragment>
      <Header left="back" title="내 지갑" right="blank" />
      <div className={classes.cardSection}>
        <Card title={`${balance}원`} />
      </div>

      <div className={classes.transactionsSection}>
        <div className={classes.monthInfo}>
          <div className={classes.monthBox}>
            <span className={classes.year}>2023년</span>
            <span className={classes.month}>{currentMonth}월</span>
            <span className={classes.prevMonth} onClick={handlePrevMonth}>
              &lt;
            </span>
          </div>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="transaction-item">
            <p>{transaction.date}</p>
            <p>{transaction.amount}</p>
            <p>{transaction.category}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MyWallet;

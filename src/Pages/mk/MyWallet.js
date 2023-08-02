import React, { useState } from "react";
import "./MyWallet.css";
import Card from "../Component/Card";

const transactions = [
  { date: "2023년 08월", amont: "+5,0000원", category: "입금" },
  { date: "2023년 08월", amount: "-20,000원", category: "지출" },
  { date: "2023년 08월", amount: "+100,000원", category: "입금" },
  { date: "2023년 09월", amount: "-30,000원", category: "지출" },
];

const MyWallet = () => {
  const [balance, setBalance] = useState(0);

  const [currentMonth, setCurrentMonth] = useState(8); // 초기값은 8월

  const handlePrevMonth = () => {
    if (currentMonth > 1) {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="my-wallet">
      <header className="header">
        <div className="back-icon">&#60;</div>
        <div className="page-title">내 지갑</div>
      </header>
      <div className="card-section">
        <Card title={`${balance}원`} />
      </div>

      <div className="transactions-section">
        <div className="month-info">
          <div className="month-box">
            <span className="year">2023년</span>
            <span className="month">{currentMonth}월</span>
            <span className="prev-month" onClick={handlePrevMonth}>
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
    </div>
  );
};

export default MyWallet;

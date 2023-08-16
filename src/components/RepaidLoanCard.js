import React from "react";
import classes from "./RepaidLoanCard.module.css";
import Star from "../assets/star.png";

const RepaidLoanCard = ({ loanDetails }) => {
  const { loanPeriod, loanName, loanAmount, totalRepayment } = loanDetails;

  return (
    <div className="repaid-loan-card">
      <div className="loan-content">
        <div className="icon">
          <img src={Star} alt="Loan Icon" />
        </div>
        <div className="loan-details">
          <h2>{loanName}</h2>
          <p>대출 기간: {loanPeriod}</p>
          <p>대출 금액: {loanAmount} 원</p>
          <p>총 상환 금액: {totalRepayment} 원</p>
        </div>
      </div>
      <div className="repaid-info">
        <hr className="divider" />
        <div className="repaid-text">상환 완료</div>
      </div>
    </div>
  );
};

export default RepaidLoanCard;

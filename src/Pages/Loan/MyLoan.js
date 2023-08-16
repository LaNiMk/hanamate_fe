import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MyLoansCard from "../../components/MyLoansCard";
import classes from "./MyLoan.module.css";
import Button from "../../components/Button";
import RepaidLoanCard from "../../components/RepaidLoanCard";
import Header from "../../components/Layout/Header";
import Plus from "../../assets/plus.png";

const MyLoan = () => {
  // const navigate = useNavigate();

  // const handleButton1Click = () => {
  //   navigate("/MyWallet");
  // };
  const handleGoBackLoans = () => {};

  return (
    <div className="my-loans">
      <Header left="back" title="대출" right="blank" />
      <div className={classes.cardSection}>
        <MyLoansCard title="">
          <Button
            label="대출 신청하기!"
            image={Plus}
            // onClick={handleButton1Click}
          />
        </MyLoansCard>
      </div>

      <div className={classes.repaidLoansSection}>
        <h2 className={classes.repaidTitle}>대출 내역</h2>
        <RepaidLoanCard
          loanDetails={{
            loanPeriod: "6개월",
            loanName: "상환 완료 대출 1",
            loanAmount: "1,000,000",
            totalRepayment: "1,200,000",
          }}
        />
        <RepaidLoanCard
          loanDetails={{
            loanPeriod: "12개월",
            loanName: "상환 완료 대출 2",
            loanAmount: "2,500,000",
            totalRepayment: "3,000,000",
          }}
        />
      </div>
    </div>
  );
};

export default MyLoan;

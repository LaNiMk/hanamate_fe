import React from "react";
import "./MyLoansCard.css";

const MyLoansCard = ({ title, children }) => {
  return (
    <div className="my-loans-card">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </div>
  );
};

export default MyLoansCard;

import { Fragment } from "react";
import classes from "./AllowanceHistory.module.css";
import Header from "../../components/Layout/Header";
import Section from "../../components/Card/Section";
import AllowanceHistoryCard from "../../components/Card/AllowanceHistoryCard";
import AllowanceAskCard from "../../components/Card/AllowanceAskCard";

const DUMMY_HISTORY = [
  {
    name: "강민경",
    amount: "15500",
  },
  {
    name: "권민선",
    amount: "35000",
  },
  {
    name: "김민재",
    amount: "7000",
  },
  {
    name: "민새미",
    amount: "48000",
  },
  {
    name: "최안식",
    amount: "24500",
  },
];

const AllowanceHistory = (props) => {
  return (
    <Fragment>
      <Header left="back" title="용돈 조회" right="blank" />
      <Section title="기다리는 중" seeMore={true} seeMoreText="지난 용돈">
        <div className={classes.cardContainer}>
          <AllowanceAskCard remainingTime="18" />
          {DUMMY_HISTORY.map((each) => (
            <AllowanceHistoryCard name={each.name} amount={each.amount} />
          ))}
        </div>
      </Section>
    </Fragment>
  );
};

export default AllowanceHistory;

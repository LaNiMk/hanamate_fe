import { Fragment } from "react";
import Header from "../../components/Layout/Header";
import Section from "../../components/Card/Section";
import Wallet from "../../components/Card/Wallet";

const Allowance = (props) => {
  return (
    <Fragment>
      <Header left="back" title="내 지갑" right="blank" />
      <Wallet amount="2000" />
      <Section title="오늘의 용돈 활동" seeMore={true} seeMoreText="전체 거래내역"></Section>
    </Fragment>
  );
};

export default Allowance;

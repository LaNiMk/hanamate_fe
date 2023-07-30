import HomeCard from "./HomeCard";
import classes from "./HomeCardBox.module.css";
import Headphones from "../../assets/headphones.png";
import Asteroid from "../../assets/asteroid.png";
import Happy from "../../assets/happy.png";
import Plan from "../../assets/action-plan.png";
import Diamond from "../../assets/diamond.png";

const HomeCardBox = () => {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>내 활동</div>
        <button className={classes.seeMore}>더 보기</button>
      </div>
      <div className={classes.cardContainer}>
        <HomeCard title="금융습관 응원 EVENT" description="여름방학 용돈 계획 챌린지" icon={Headphones} />
        <HomeCard title="내 이름으로 된" description="숨은 리워드 모아봐요" icon={Asteroid} />
        <HomeCard title="오늘 기분" description="어때요?" icon={Happy} />
        <HomeCard title="용돈 계획하고" description="'잘' 써보기!" icon={Plan} />
        <HomeCard title="오늘 Zu 모으면" description="리워드가 팡!" icon={Diamond} />
      </div>
      {/* <div className={classes.bottom}>Blank</div> */}
    </div>
  );
};

export default HomeCardBox;

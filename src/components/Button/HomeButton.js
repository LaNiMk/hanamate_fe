import classes from "./HomeButton.module.css";

const HomeButton = (props) => {
  return (
    <div className={classes.buttonContainer}>
      <button className={`${classes.homeButton} ${classes.button0}`}>
        <div className={classes.textContainer}>용돈</div>
        <div className={classes.iconContainer}>아이콘</div>
      </button>
      <button className={`${classes.homeButton} ${classes.button1}`}>
        <div className={classes.textContainer}>미정</div>
        <div className={classes.iconContainer}>아이콘</div>
      </button>
      <button className={`${classes.homeButton} ${classes.button2}`}>
        <div className={classes.textContainer}>대출</div>
        <div className={classes.iconContainer}>아이콘</div>
      </button>
      <button className={`${classes.homeButton} ${classes.button3}`}>
        <div className={classes.textContainer}>모임통장</div>
        <div className={classes.iconContainer}>아이콘</div>
      </button>
    </div>
  );
};

export default HomeButton;

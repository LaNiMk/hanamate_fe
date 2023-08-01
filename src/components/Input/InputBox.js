import classes from "./InputBox.module.css";

const InputBox = (props) => {
  return (
    <div className={classes.inputBox}>
      {props.left}
      <input placeholder={props.placeholder} />
      {props.right}
    </div>
  );
};

export default InputBox;

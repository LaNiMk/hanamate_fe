import React from "react";
import "./Button.css";

const Button = ({ label, image, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button className="button">
      <img src={image} alt="Icon" className="icon" />
      <div className="label">{label}</div>
    </button>
  );
};

export default Button;

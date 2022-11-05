import React from "react";
import "./input.css";

const Input = ({
  label,
  className,
  type = "",
  as: Component = "input",
  error,
  ...rest
}) => {
  return (
    <div className={className}>
      <label className="inputLabel">{label}</label>
      <Component
        type={type}
        className={`inputElement ${error ? "incorrect-input" : ""}`}
        {...rest}
      />
    </div>
  );
};
export default Input;

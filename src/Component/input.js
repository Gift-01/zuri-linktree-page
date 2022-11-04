import React from "react";

const Input = ({
  placeholder,
  label,
  checkBoxLabel,
  type = "",
  as: Component = "input",
}) => {
  return (
    <div>
      <label>{label}</label>
      <Component placeholder={placeholder} type={type} />
      <label>{checkBoxLabel}</label>
    </div>
  );
};
export default Input;

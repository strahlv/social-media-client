import React from "react";

const Input = ({ type, labelText, name, onChange, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;

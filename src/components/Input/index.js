import React from "react";
import { InputWrapper, StyledInput, StyledLabel } from "./style";

const Input = ({
  labelText,
  type,
  name,
  placeholder,
  required = false,
  autoComplete = "on",
  onChange,
  value,
}) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
};

export default Input;

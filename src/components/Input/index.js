import React from "react";
import {
  InputWrapper,
  StyledInput,
  StyledLabel,
  StyledTitleInput,
} from "./style";

const Input = ({
  labelText,
  type,
  name,
  placeholder,
  required = false,
  autoComplete = "on",
  onChange,
  value,
  variant,
}) => {
  return (
    <InputWrapper>
      {labelText ? <StyledLabel htmlFor={name}>{labelText}</StyledLabel> : null}
      {variant !== "title" ? (
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
      ) : (
        <StyledTitleInput
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
        />
      )}
    </InputWrapper>
  );
};

export default Input;

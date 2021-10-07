import React from "react";
import { IconWrapper, InputWrapper, StyledInput, StyledLabel } from "./style";

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
  width,
  className,
  icon,
  ...rest
}) => {
  return (
    <InputWrapper width={width} className={className}>
      {labelText ? <StyledLabel htmlFor={name}>{labelText}</StyledLabel> : null}
      <StyledInput
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
        variant={variant}
        {...rest}
      />
      {icon ? <IconWrapper>{icon}</IconWrapper> : null}
    </InputWrapper>
  );
};

export default Input;

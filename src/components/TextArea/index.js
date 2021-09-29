import React from "react";
import styled from "styled-components";
import { StyledInput } from "../Input/style";

const StyledTextArea = styled(StyledInput)`
  border-width: 1px;
`;

const TextArea = ({ name, onChange, value }) => {
  return (
    <StyledTextArea
      name={name}
      id={name}
      autoComplete="off"
      rows={5}
      onChange={onChange}
      value={value}
      as="textarea"
    />
  );
};

export default TextArea;

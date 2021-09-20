import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 600px;
  padding: 2rem;
`;

const Form = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;

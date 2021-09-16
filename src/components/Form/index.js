import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = ({ handleSubmit, component }) => {
  return <StyledForm onSubmit={handleSubmit}>{component}</StyledForm>;
};

export default Form;

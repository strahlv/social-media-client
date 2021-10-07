import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const Form = ({ onSubmit, children, ...rest }) => {
  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      {children}
    </StyledForm>
  );
};

export default Form;

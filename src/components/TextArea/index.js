import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border: 2px solid var(--clr-primary);
  border-radius: 5px;
  font-family: var(--font-poppins);
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
`;

const TextArea = ({ children }) => {
  return (
    <StyledTextArea autoComplete="off" rows={5}>
      {children}
    </StyledTextArea>
  );
};

export default TextArea;

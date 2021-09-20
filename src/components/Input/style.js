import styled from "styled-components";

export const StyledInput = styled.input`
  border: 2px solid var(--clr-primary);
  border-radius: 5px;
  font-family: var(--font-poppins);
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const StyledLabel = styled.label`
  position: absolute;
  font-size: 0.9rem;
  background-color: white;
  top: -10px;
  left: 10px;
  padding: 5px 2px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

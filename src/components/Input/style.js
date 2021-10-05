import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  border: 1px solid var(--clr-primary);
  border-radius: 5px;
  color: var(--clr-dark);
  font-family: var(--font-poppins);
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;

  &:focus {
    outline-color: var(--clr-primary-accent);
  }
`;

export const StyledTitleInput = styled(StyledInput)`
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledLabel = styled.label`
  position: absolute;
  font-size: 0.9rem;
  line-height: 1rem;
  background-color: white;
  top: -10px;
  left: 10px;
  padding: 0 2px;
`;

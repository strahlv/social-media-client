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
  font-size: ${(props) => (props.variant !== "title" ? "1rem" : "2rem")};
  font-weight: ${(props) => (props.variant !== "title" ? "regular" : "bold")};
  width: 100%;
  padding: 0.5rem 1rem;

  &:focus {
    outline-color: var(--clr-primary-accent);
  }
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

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  transform: translateY(50%);
  color: var(--clr-primary);
  user-select: none;
  cursor: text;
`;

import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-family: var(--font-poppins);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: opacity 0.5s;

  ${(props) => props.stretch && "width: 100%;"};

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: var(--clr-primary);
  color: var(--clr-primary-light);
`;

export const StyledPrimaryLightButton = styled(StyledButton)`
  background: var(--clr-primary-light);
  color: var(--clr-primary);
`;

export const StyledPrimaryAccentButton = styled(StyledButton)`
  background: var(--clr-primary-accent);
  color: var(--clr-light);
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background: var(--clr-secondary);
  color: var(--clr-secondary-light);
`;

export const StyledSecondaryLightButton = styled(StyledButton)`
  background: var(--clr-secondary-light);
  color: var(--clr-secondary);
`;

export const StyledSecondaryAccentButton = styled(StyledButton)`
  background: var(--clr-secondary-accent);
  color: var(--clr-light);
`;

export const StyledLightButton = styled(StyledButton)`
  background: var(--clr-light);
  color: var(--clr-dark);
`;

export const StyledDarkButton = styled(StyledButton)`
  background: var(--clr-dark);
  color: var(--clr-light);
`;

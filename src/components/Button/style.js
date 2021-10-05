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

  &:disabled {
    opacity: 0.25;
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

export const StyledIconButton = styled.button`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: var(--clr-light);
  color: var(--clr-primary);
  font-size: 1rem;
  font-family: var(--font-poppins);
  transition: background 0.2s ease;
  background: ${(props) => getColor(props.backgroundColor, "light")};
  color: ${(props) => getColor(props.color, "primary")};

  &:hover {
    background: var(--clr-secondary-light);
    background: ${(props) => getColor(props.hoverBackgroundColor, "primary")};
    color: ${(props) => getColor(props.hoverColor, "light")};
  }
`;

export const StyledIconDangerButton = styled(StyledIconButton)`
  color: var(--clr-primary-accent);

  &:hover {
    background: var(--clr-primary-accent);
    color: var(--clr-light);
  }
`;

const getColor = (color, defaultColor) => {
  if (color === "transparent") {
    return color;
  }
  color = color && `--clr-${color}`;
  return `var(${color}, ${defaultColor})`;
};

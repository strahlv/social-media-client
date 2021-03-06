import React from "react";
import {
  StyledButton,
  StyledDarkButton,
  StyledIconButton,
  StyledIconDangerButton,
  StyledLightButton,
  StyledPrimaryAccentButton,
  StyledPrimaryButton,
  StyledPrimaryLightButton,
  StyledSecondaryAccentButton,
  StyledSecondaryButton,
  StyledSecondaryLightButton,
} from "./style";

const getStyledButton = (Component, props) => {
  const { type, onClick, disabled, stretch, color, backgroundColor, children } =
    props;

  const button = (
    <Component
      {...props}
      type={type}
      onClick={onClick}
      disabled={disabled}
      stretch={stretch}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </Component>
  );

  return button;
};

export const Button = (props) => getStyledButton(StyledButton, props);

export const PrimaryButton = (props) =>
  getStyledButton(StyledPrimaryButton, props);

export const PrimaryLightButton = (props) =>
  getStyledButton(StyledPrimaryLightButton, props);

export const PrimaryAccentButton = (props) =>
  getStyledButton(StyledPrimaryAccentButton, props);

export const SecondaryButton = (props) =>
  getStyledButton(StyledSecondaryButton, props);

export const SecondaryLightButton = (props) =>
  getStyledButton(StyledSecondaryLightButton, props);

export const SecondaryAccentButton = (props) =>
  getStyledButton(StyledSecondaryAccentButton, props);

export const LightButton = (props) => getStyledButton(StyledLightButton, props);

export const DarkButton = (props) => getStyledButton(StyledDarkButton, props);

export const IconButton = (props) => getStyledButton(StyledIconButton, props);

export const IconDangerButton = (props) =>
  getStyledButton(StyledIconDangerButton, props);

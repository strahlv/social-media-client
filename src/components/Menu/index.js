import React from "react";
import styled from "styled-components";
import { StyledMenuContainer, StyledMenuItems } from "./style";

export const Menu = ({ visible, children }) => {
  return (
    <StyledMenuContainer visible={visible}>
      <StyledMenuItems>{children}</StyledMenuItems>
    </StyledMenuContainer>
  );
};

export const MenuItem = styled.button`
  background: var(--clr-light);
  color: var(--clr-secondary);
  font-size: 1rem;
  font-family: var(--font-poppins);
  border: none;
  transition: background 0.2s ease;
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover {
    background: var(--clr-secondary-light);
  }
`;

export const MenuItemDanger = styled(MenuItem)`
  background: var(--clr-primary-light);
  color: var(--clr-primary-accent);

  &:hover {
    background: var(--clr-primary-accent);
    color: var(--clr-primary-light);
  }
`;

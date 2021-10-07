import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../Input";
import { FlexRow } from "../Layout";

export const StyledNav = styled.nav`
  background: linear-gradient(
    45deg,
    var(--clr-primary) 0%,
    var(--clr-secondary) 100%
  );
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  z-index: 100;
  color: var(--clr-light);
`;

export const Logo = styled(Link)`
  font-weight: bold;
  cursor: pointer;
  color: var(--clr-light);
  text-decoration: none;

  &:hover {
    color: var(--clr-light);
  }

  & span {
    font-weight: bold;
    text-decoration: underline wavy white;
  }
`;

export const ButtonsWrapper = styled(FlexRow)`
  flex: 0 1;
`;

export const SearchBar = styled(Input)`
  max-width: 600px;
`;

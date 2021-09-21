import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postsCleared } from "../../slices/postsSlice";
import { logout } from "../../slices/userSlice";
import { SecondaryLightButton } from "../Button";

const NavWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav`
  background: linear-gradient(
    45deg,
    var(--clr-primary) 0%,
    var(--clr-secondary) 100%
  );
  width: 100%;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(postsCleared());
    dispatch(logout());
  };

  return (
    <NavWrapper>
      <StyledNav>
        <SecondaryLightButton type="button" onClick={handleLogout}>
          Logout
        </SecondaryLightButton>
      </StyledNav>
    </NavWrapper>
  );
};

export default Navbar;

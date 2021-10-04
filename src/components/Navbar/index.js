import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { postsCleared } from "../../slices/postsSlice";
import { logout } from "../../slices/usersSlice";
import { SecondaryLightButton } from "../Button";

const StyledNav = styled.nav`
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
  justify-content: flex-end;
  z-index: 100;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(postsCleared());
    dispatch(logout());
    history.push("/");
  };

  return (
    <StyledNav>
      <SecondaryLightButton type="button" onClick={handleLogout}>
        Logout
      </SecondaryLightButton>
    </StyledNav>
  );
};

export default Navbar;

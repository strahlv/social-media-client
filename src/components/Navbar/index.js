import React from "react";
import { FaBell, FaSign, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postsCleared } from "../../slices/postsSlice";
import { logout, selectCurrentUserId } from "../../slices/usersSlice";
import { IconButton } from "../Button";
import Input from "../Input";
import { FlexRow } from "../Layout";

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
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  z-index: 100;
  color: var(--clr-light);
`;

const Logo = styled(Link)`
  font-weight: bold;
  cursor: pointer;
  color: var(--clr-light);
  text-decoration: none;

  & span {
    font-weight: bold;
    text-decoration: underline wavy white;
  }
`;

const ButtonsWrapper = styled(FlexRow)`
  flex: 0 1;
`;

const SearchBar = styled(Input)`
  max-width: 600px;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector(selectCurrentUserId);

  const handleLogout = () => {
    dispatch(postsCleared());
    dispatch(logout());
    history.push("/");
  };

  return (
    <StyledNav>
      <Logo to="/">
        re<span>markz</span>
      </Logo>
      <SearchBar
        name="search"
        placeholder="Search by user, title, hashtag..."
      />
      <ButtonsWrapper>
        <IconButton
          to={`/users/${currentUserId}`}
          type="button"
          color="light"
          backgroundColor="transparent"
          hoverColor="primary"
          hoverBackgroundColor="light"
          as={Link}
        >
          <FaUser />
        </IconButton>
        <IconButton
          type="button"
          color="light"
          backgroundColor="transparent"
          hoverColor="primary"
          hoverBackgroundColor="light"
        >
          <FaBell />
        </IconButton>
        <IconButton
          type="button"
          onClick={handleLogout}
          color="light"
          backgroundColor="transparent"
          hoverColor="primary"
          hoverBackgroundColor="light"
        >
          <FaSignOutAlt />
        </IconButton>
      </ButtonsWrapper>
    </StyledNav>
  );
};

export default Navbar;

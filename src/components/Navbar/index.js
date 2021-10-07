import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaBell, FaSearch, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { postsCleared } from "../../slices/postsSlice";
import { logout, selectCurrentUserId } from "../../slices/usersSlice";
import { IconButton } from "../Button";
import { ButtonsWrapper, Logo, SearchBar, StyledNav } from "./style";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector(selectCurrentUserId);

  const [isMobile, setIsMobile] = useState(false);

  const mobileBreakpoint = 600;
  const mql = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);

  useEffect(() => {
    mql.addEventListener("change", (evt) => setIsMobile(evt.matches));
    return () => {
      mql.removeEventListener("change", (evt) => setIsMobile(evt.matches));
    };
  }, [mql]);

  const handleLogout = () => {
    dispatch(postsCleared());
    dispatch(logout());
    history.push("/");
  };

  if (isMobile) {
    return (
      <StyledNav>
        <IconButton
          type="button"
          color="light"
          backgroundColor="transparent"
          hoverColor="primary"
          hoverBackgroundColor="light"
        >
          <FaBars />
        </IconButton>
        <Logo to="/">
          re<span>markz</span>
        </Logo>
        <IconButton
          type="button"
          color="light"
          backgroundColor="transparent"
          hoverColor="primary"
          hoverBackgroundColor="light"
        >
          <FaSearch />
        </IconButton>
      </StyledNav>
    );
  }

  return (
    <StyledNav>
      <Logo to="/">
        re<span>markz</span>
      </Logo>
      <SearchBar
        name="search"
        placeholder="Pesquisar por usuário, título da publicação, tags..."
        icon={<FaSearch />}
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

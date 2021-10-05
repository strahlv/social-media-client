import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCurrentUserId, selectUserById } from "../../slices/usersSlice";
import Container from "../Container";
import Navbar from "../Navbar";
import PostForm from "../PostForm";
import PostList from "../PostList";

const WelcomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0 3rem;

  & span {
    font-style: italic;
    text-decoration: underline wavy var(--clr-primary-accent);
  }
`;

const HomePage = () => {
  const currentUserId = useSelector(selectCurrentUserId);
  const user = useSelector((state) => selectUserById(state, currentUserId));

  if (!user) {
    return (
      <Container>
        <WelcomeTitle>Oops...</WelcomeTitle>
      </Container>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <WelcomeTitle>
          Hello <span>{user.firstName}</span>! ;)
        </WelcomeTitle>
        <PostForm />
        <PostList userId={user._id} />
      </Container>
    </>
  );
};

export default HomePage;

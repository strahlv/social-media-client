import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { fetchAuthenticatedUser, selectUser } from "../../slices/userSlice";
import Container from "../Container";
import LoadingScreen from "../LoadingScreen";
import Navbar from "../Navbar";
import PostForm from "../PostForm";
import PostList from "../PostList";

// TODO: remove
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
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.status === "idle" && !user.data) {
      dispatch(fetchAuthenticatedUser());
    }
  }, [dispatch, user.data, user.status]);

  let content;

  if (user.status === "loading") {
    content = <LoadingScreen />;
  } else if (user.status === "failed") {
    content = <Redirect to="login" />;
  } else if (user.status === "succeeded" && user.data) {
    content = (
      <>
        <Navbar />
        <Container>
          <WelcomeTitle>
            Hello <span>{user.data.firstName}</span>! ;)
          </WelcomeTitle>
          <PostForm />
          <PostList userId={user.data._id} />
        </Container>
      </>
    );
  }

  return <>{content}</>;
};

export default HomePage;

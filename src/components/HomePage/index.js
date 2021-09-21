import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { fetchPosts, selectAllPosts } from "../../slices/postsSlice";
import { selectUser } from "../../slices/userSlice";
import Container from "../Container";
import LoadingSpinner from "../LoadingSpinner";
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
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    if (user.data) {
      dispatch(fetchPosts());
    }
  }, [dispatch, user.data]);

  let content;

  if (user.status === "loading") {
    content = (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  } else if (!user.data) {
    content = <Redirect to="login" />;
  } else {
    content = (
      <>
        <Navbar />
        <Container>
          <WelcomeTitle>
            Hello <span>{user.data.firstName}</span>! ;)
          </WelcomeTitle>
          <PostForm />
          <PostList posts={posts} />
        </Container>
      </>
    );
  }

  return <>{content}</>;
};

export default HomePage;

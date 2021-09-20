import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getPosts, selectPosts } from "../../slices/postsSlice";
import { selectUser } from "../../slices/userSlice";
import Container from "../Container";
import LoadingSpinner from "../LoadingSpinner";
import Navbar from "../Navbar";
import PostForm from "../PostForm";
import PostList from "../PostList";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    if (user.data) {
      dispatch(getPosts());
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
          <h1>Hello {user.data.firstName}! :)</h1>
          <PostForm />
          <PostList posts={posts.data} />
        </Container>
      </>
    );
  }

  return <>{content}</>;
};

export default HomePage;

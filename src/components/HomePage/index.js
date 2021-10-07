import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserId, selectUserById } from "../../slices/usersSlice";
import Container from "../Container";
import Navbar from "../Navbar";
import PostForm from "../PostForm";
import PostList from "../PostList";
import { WelcomeTitle } from "./style";

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
      <Container flexJustify="flex-start">
        <WelcomeTitle>
          Olá <span>{user.firstName}</span>! ;)
        </WelcomeTitle>
        <PostForm />
        <PostList />
      </Container>
    </>
  );
};

export default HomePage;

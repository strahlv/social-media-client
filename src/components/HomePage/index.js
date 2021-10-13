import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserId, selectUserById } from "../../slices/usersSlice";
import Container from "../Container";
import { FlexCol } from "../Layout";
import Navbar from "../Navbar";
import PostForm from "../PostForm";
import PostList from "../PostList";
import Title from "../Title";

const HomePage = () => {
  const currentUserId = useSelector(selectCurrentUserId);
  const user = useSelector((state) => selectUserById(state, currentUserId));

  if (!user) {
    return (
      <Container>
        <Title>
          Oops... <span>algo deu errado</span>. :(
        </Title>
      </Container>
    );
  }

  return (
    <>
      <Navbar />
      <Container flexJustify="flex-start">
        <FlexCol align="center" padding="3rem 2rem">
          <Title>
            Olá <span>{user.firstName}</span>! ;)
          </Title>
          <PostForm />
        </FlexCol>
        <PostList />
      </Container>
    </>
  );
};

export default HomePage;

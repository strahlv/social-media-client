import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchUser,
  selectUserById,
  selectUsersState,
} from "../../slices/usersSlice";
import Container from "../Container";
import LoadingSpinner from "../LoadingSpinner";
import Navbar from "../Navbar";
import PostList from "../PostList";

const UserPage = () => {
  let { userId } = useParams();
  const dispatch = useDispatch();

  const usersState = useSelector(selectUsersState);
  const user = useSelector((state) => selectUserById(state, userId));

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId, user]);

  let content = null;

  if (usersState.status === "loading") {
    content = <LoadingSpinner />;
  } else if (usersState.status === "failed") {
    content = <h1>Error, I guess... :(</h1>;
  } else if (user) {
    console.log("User page of ", user);
    content = (
      <>
        <h1>Showing posts by {user?.firstName}</h1>
        <PostList userId={userId} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container>{content}</Container>
    </>
  );
};

export default UserPage;

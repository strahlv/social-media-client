import React, { useEffect } from "react";
import { FaBirthdayCake, FaCommentAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  fetchUser,
  selectUserById,
  selectUsers,
} from "../../slices/usersSlice";
import Avatar from "../Avatar";
import Container from "../Container";
import Navbar from "../Navbar";
import PostList from "../PostList";
import UserInfo from "../UserInfo";
import { UserBio, UserFullName, UserInfoWrapper, UserProfile } from "./style";

const UserPage = () => {
  let { userId } = useParams();
  const dispatch = useDispatch();

  const usersState = useSelector(selectUsers);
  const user = useSelector((state) => selectUserById(state, userId));

  useEffect(() => {
    if (!user && usersState !== "failed") {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId, user, usersState]);

  if (usersState === "failed") {
    return (
      <>
        <p>Oops... {usersState.error}</p>
        <Link to="/">Voltar à página principal.</Link>
      </>
    );
  }

  if (!user) {
    return null;
  }

  const postCount = user.posts.length;
  const birthday = new Date(user.birthday).toLocaleDateString();

  return (
    <>
      <Navbar />
      <Container flexJustify="flex-start" color="transparent">
        <UserProfile>
          <Avatar size="xl" />
          <UserFullName>{user.fullName}</UserFullName>
          <UserBio>{user.bio || null}</UserBio>
          <UserInfoWrapper>
            <UserInfo icon={<FaCommentAlt />} data={postCount || null} />
            <UserInfo icon={<FaBirthdayCake />} data={birthday || null} />
            <UserInfo icon={<FaMapMarkerAlt />} data={user.location || null} />
          </UserInfoWrapper>
        </UserProfile>
        <PostList userId={userId} />
      </Container>
    </>
  );
};

export default UserPage;

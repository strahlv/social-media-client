import React, { useEffect } from "react";
import { FaBirthdayCake, FaCommentAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import {
  fetchUser,
  selectUserById,
  selectUsersState,
} from "../../slices/usersSlice";
import Avatar from "../Avatar";
import Container from "../Container";
import Navbar from "../Navbar";
import PostList from "../PostList";
import UserInfo from "../UserInfo";

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

  if (usersState.status === "failed") {
    return <h1>Error, I guess... :(</h1>;
  }

  if (!user) {
    return null;
  }

  const postCount = user.posts.length;
  const birthday = new Date(user.birthday).toLocaleDateString();

  return (
    <>
      <Navbar />
      <UserProfile>
        <Avatar size="xl" />
        <h1>{user.fullName}</h1>
        <p>
          long ass user bio lorem ipsun long ass user bio lorem ipsun long ass
          user bio lorem ipsun long ass user bio lorem ipsun long ass user bio
          lorem ipsun long ass user bio lorem ipsunlong ass user bio lorem ipsun
          long ass user bio lorem ipsun long ass user bio lorem ipsun
        </p>
        <UserInfoWrapper>
          <UserInfo icon={<FaCommentAlt />} data={postCount} />
          <UserInfo icon={<FaBirthdayCake />} data={birthday || "99/99/9999"} />
          <UserInfo
            icon={<FaMapMarkerAlt />}
            data={user.location || "Please-Add, A Place"}
          />
        </UserInfoWrapper>
      </UserProfile>
      <Container>
        <PostList userId={userId} />
      </Container>
    </>
  );
};

export default UserPage;

const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: auto;
  max-width: 1100px;
  color: white;
  text-align: center;

  & h1 {
    margin-top: 2rem;
    font-size: 3rem;
    font-weight: bold;
    line-height: 2.5rem;
  }

  & p {
    margin-top: 1rem;
    font-weight: 200;
    max-width: 500px;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 386px) {
    flex-direction: column;
  }
`;

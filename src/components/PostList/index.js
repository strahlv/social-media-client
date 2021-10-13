import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchPosts,
  fetchUserPosts,
  selectPostsIds,
  selectPostsStatus,
} from "../../slices/postsSlice";
import { selectUserById } from "../../slices/usersSlice";
import LoadingSpinner from "../LoadingSpinner";
import PostCard from "../PostCard";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const PostList = ({ userId }) => {
  const dispatch = useDispatch();

  const postsStatus = useSelector(selectPostsStatus);
  const postsIds = useSelector(selectPostsIds);
  const user = useSelector(selectUserById(userId));

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserPosts(userId));
    } else {
      dispatch(fetchPosts());
    }
  }, [dispatch, userId]);

  if (postsStatus === "failed") {
    return <p>Oops...</p>;
  }

  let items = <LoadingSpinner />;

  if (postsIds.length) {
    items = postsIds.map((postId) => {
      return <PostCard key={postId} userId={userId} postId={postId} />;
    });
  } else if (postsStatus !== "loading") {
    items = <p>{user.firstName} ainda não publicou nada.</p>;
  }

  return <StyledList>{items}</StyledList>;
};

export default PostList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchUserPosts,
  selectPostsIds,
  selectPostsStatus,
} from "../../slices/postsSlice";
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

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  if (postsStatus === "error") {
    return <p>Oops...</p>;
  }

  let items = <LoadingSpinner />;

  if (postsIds.length) {
    items = postsIds.map((postId) => {
      return <PostCard key={postId} userId={userId} postId={postId} />;
    });
  }

  return <StyledList>{items}</StyledList>;
};

export default PostList;

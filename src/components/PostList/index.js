import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchPosts,
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
  margin-top: 3rem;
  width: 100%;
`;

const PostList = ({ userId }) => {
  const dispatch = useDispatch();

  const postStatus = useSelector(selectPostsStatus);
  const postsIds = useSelector(selectPostsIds);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postStatus]);

  let items = <LoadingSpinner />;

  if (postsIds.length) {
    items = postsIds.map((postId) => {
      return <PostCard key={postId} postId={postId} />;
    });
  }

  return <StyledList>{items}</StyledList>;
};

export default PostList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchPosts,
  fetchUserPosts,
  selectPostsIds,
  selectPostsStatus,
} from "../../slices/postsSlice";
import LoadingSpinner from "../LoadingSpinner";
import PostCard from "../PostCard";

const StyledList = styled.ul`
  flex-grow: 1;
  background: var(--clr-light);
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
    items = <p>Este usuário ainda não publicou nada.</p>;
  }

  return <StyledList>{items}</StyledList>;
};

export default PostList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  fetchUserPosts,
  selectPostsIds,
  selectPostsStatus,
} from "../../slices/postsSlice";
import LoadingSpinner from "../LoadingSpinner";
import PostCard from "../PostCard";
import { StyledList } from "./style";

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
    items = <p>Este usuário ainda não possui publicações.</p>;
  }

  return <StyledList>{items}</StyledList>;
};

export default PostList;

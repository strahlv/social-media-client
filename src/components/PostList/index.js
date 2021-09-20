import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";
import PostCard from "../PostCard";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const PostList = ({ posts }) => {
  let items = <LoadingSpinner />;

  if (posts.length) {
    items = posts.map((post) => {
      return <PostCard postData={post} />;
    });
  }

  return <StyledList>{items}</StyledList>;
};

export default PostList;

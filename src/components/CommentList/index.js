import React from "react";
import styled from "styled-components";
import Comment from "../Comment";

const CommentWrapper = styled.section`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--clr-primary);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentList = ({ postId, comments }) => {
  const items = comments?.map((comment) => {
    return <Comment key={comment._id} postId={postId} commentData={comment} />;
  });

  return (
    <CommentWrapper>
      {comments?.length ? (
        <StyledList>{items}</StyledList>
      ) : (
        "Seja o primeiro a comentar!"
      )}
    </CommentWrapper>
  );
};

export default CommentList;

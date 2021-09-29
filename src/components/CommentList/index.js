import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteComment } from "../../slices/postsSlice";
import { selectUser } from "../../slices/userSlice";
import { IconButton, IconDangerButton } from "../Button";

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

const StyledListItem = styled.li`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid var(--clr-primary-light);
  border-radius: 0px;
  opacity: ${(props) => (props.isLoading ? 0.5 : 1)};

  &:last-of-type {
    border-bottom: none;
  }

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & header div {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
  }

  & h3 {
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;
  }

  & p:nth-of-type(2) {
    color: var(--clr-secondary-accent);
    align-self: flex-end;
    font-size: 0.8rem;
    font-style: italic;
  }
`;

const Comment = ({ postId, commentData }) => {
  const [commentState, setCommentState] = useState("idle");

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isLoading = commentState === "loading";

  const handleDelete = () => {
    setCommentState("loading");
    dispatch(deleteComment({ postId, commentId: commentData._id }));
  };

  const isAuthor = commentData.author._id === user.data._id;

  const authorButtons = isAuthor ? (
    <div>
      <IconButton disabled={isLoading}>
        <FaEdit />
      </IconButton>
      <IconDangerButton disabled={isLoading} onClick={handleDelete}>
        <FaTrash />
      </IconDangerButton>
    </div>
  ) : null;

  return (
    <StyledListItem isLoading={isLoading}>
      <header>
        <h3>by {commentData.author?.firstName}:</h3>
        {authorButtons}
      </header>
      <p>{commentData.body}</p>
      <p>{commentData.createdAge}</p>
    </StyledListItem>
  );
};

const CommentList = ({ postId, comments, ...rest }) => {
  const items = comments?.map((comment) => {
    return <Comment key={comment._id} postId={postId} commentData={comment} />;
  });

  return (
    <CommentWrapper>
      {comments?.length ? (
        <StyledList {...rest}>{items}</StyledList>
      ) : (
        "Be the first to comment!"
      )}
    </CommentWrapper>
  );
};

export default CommentList;

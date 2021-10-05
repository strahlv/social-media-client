import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteComment } from "../../slices/postsSlice";
import { selectCurrentUserId } from "../../slices/usersSlice";
import Avatar from "../Avatar";
import { IconButton, IconDangerButton } from "../Button";
import { Author, AuthorWrapper } from "../PostCard/style";

const Comment = ({ postId, commentData }) => {
  const [commentState, setCommentState] = useState("idle");

  const dispatch = useDispatch();

  const currentUserId = useSelector(selectCurrentUserId);
  const isLoading = commentState === "loading";

  const handleDelete = () => {
    setCommentState("loading");
    dispatch(deleteComment({ postId, commentId: commentData._id }));
  };

  const isAuthor = commentData.author._id === currentUserId;

  const authorButtons = isAuthor ? (
    <ButtonsWrapper>
      <IconButton disabled={isLoading}>
        <FaEdit />
      </IconButton>
      <IconDangerButton disabled={isLoading} onClick={handleDelete}>
        <FaTrash />
      </IconDangerButton>
    </ButtonsWrapper>
  ) : null;

  return (
    <StyledListItem isLoading={isLoading}>
      <header>
        <AuthorWrapper>
          <Avatar src="" size="sm" float="left" />
          <Author to={`/users/${commentData.author._id}`}>
            {commentData.author?.fullName || "Unknown"}:
          </Author>
        </AuthorWrapper>
        {authorButtons}
      </header>
      <p>{commentData.body}</p>
      <p>{commentData.createdAge}</p>
    </StyledListItem>
  );
};

export default Comment;

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
    margin: 0;
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

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin: 0;
`;

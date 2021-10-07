import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../slices/postsSlice";
import { selectCurrentUserId } from "../../slices/usersSlice";
import Avatar from "../Avatar";
import { IconButton, IconDangerButton } from "../Button";
import { Author, AuthorWrapper } from "../PostCard/style";
import {
  ButtonsWrapper,
  StyledComment,
  CommentHeader,
  CommentAge,
} from "./style";

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
    <StyledComment isLoading={isLoading}>
      <CommentHeader>
        <AuthorWrapper>
          <Avatar src="" size="sm" float="left" />
          <Author to={`/users/${commentData.author._id}`}>
            {commentData.author?.fullName || "Unknown"}:
          </Author>
        </AuthorWrapper>
        {authorButtons}
      </CommentHeader>
      <p>{commentData.body}</p>
      <CommentAge>{commentData.createdAge}</CommentAge>
    </StyledComment>
  );
};

export default Comment;

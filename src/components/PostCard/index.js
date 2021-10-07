import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import {
  FaComment,
  FaEdit,
  FaEllipsisV,
  FaThumbsDown,
  FaThumbsUp,
  FaTrash,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikePost,
  likePost,
  deletePost,
  selectPostById,
  updatePost,
  createComment,
  selectPostsStatus,
} from "../../slices/postsSlice";
import { Menu, MenuItem, MenuItemDanger } from "../Menu";
import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";
import { Button, IconButton } from "../Button";
import useForm from "../../hooks/useForm";
import { FlexRow } from "../Layout";
import {
  CommentFormWrapper,
  Author,
  AuthorWrapper,
  PostBody,
  PostHeader,
  PostTitle,
  ReactionsWrapper,
  StyledCard,
  StyledHighlightedReactionButton,
  StyledReactionButton,
  StyledTag,
  TagList,
  TitleWrapper,
} from "./style";
import CommentList from "../CommentList";
import { selectCurrentUserId } from "../../slices/usersSlice";
import Avatar from "../Avatar";

const ReactionButton = ({ icon, value, highlighted, onClick }) => {
  const content = (
    <>
      {icon}
      {value}
    </>
  );
  return highlighted ? (
    <StyledHighlightedReactionButton onClick={onClick}>
      {content}
    </StyledHighlightedReactionButton>
  ) : (
    <StyledReactionButton onClick={onClick}>{content}</StyledReactionButton>
  );
};

const PostCard = ({ postId }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [cardState, setCardState] = useState("idle");

  const dispatch = useDispatch();

  const [{ formValues, setFormValues, isLoading }, handleChange, handleSubmit] =
    useForm();

  const currentUserId = useSelector(selectCurrentUserId);
  const post = useSelector((state) => selectPostById(state, postId));
  const postsStatus = useSelector(selectPostsStatus);

  const [isLiked, setIsLiked] = useState(
    post.likes?.find((id) => id === currentUserId)
  );

  const [isDisliked, setIsDisliked] = useState(
    post.dislikes?.find((id) => id === currentUserId)
  );

  const isAuthor = post.author._id === currentUserId;

  // Voltar ao estado ocioso (idle) ao terminar de carregar uma requisição
  if (postsStatus !== "loading" && cardState === "loading") {
    setCardState("idle");
  }

  const handleLike = () => {
    dispatch(likePost(post._id));
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislike = () => {
    dispatch(dislikePost(post._id));
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };

  const handleShowCommentForm = () => {
    setCardState(cardState !== "commenting" && "commenting");
    setFormValues({ body: "" });
  };

  const handleCreateComment = () => {
    dispatch(createComment({ postId: post._id, newComment: formValues }));
    setFormValues({});
    setCardState("idle");
  };

  const handleToggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleOutsideClick = () => {
    if (isMenuOpened) {
      setIsMenuOpened(false);
    }
  };

  const handleShowUpdateForm = () => {
    setFormValues({
      title: post.title,
      body: post.body,
      tags: post.tags.join(" "),
    });
    setCardState("editing");
    setIsMenuOpened(false);
  };

  const handleUpdate = () => {
    const updatedPost = {
      ...formValues,
      tags: formValues.tags?.trim().split(" "),
    };
    dispatch(updatePost({ postId: post._id, updatedPost }));
    setCardState("loading");
    setIsMenuOpened(false);
  };

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    setCardState("loading");
    setIsMenuOpened(false);
  };

  // **************************************
  // NEW COMMENT FORM
  // **************************************
  const commentForm = cardState === "commenting" && (
    <CommentFormWrapper>
      <Form onSubmit={handleSubmit(handleCreateComment)}>
        <TextArea
          required
          name="body"
          onChange={handleChange}
          value={formValues.body}
        />
        <FlexRow>
          <Button type="submit" stretch backgroundColor="secondary">
            Comentar
          </Button>
          <Button
            type="button"
            onClick={() => setCardState("idle")}
            stretch
            backgroundColor="primary-accent"
          >
            Cancelar
          </Button>
        </FlexRow>
      </Form>
    </CommentFormWrapper>
  );

  // **************************************
  // POST CONTENT
  // **************************************
  // Formata tags
  const tags = post.tags.map((tag, index) => (
    <StyledTag key={index}>#{tag}</StyledTag>
  ));

  // Botões de like/deslike/comment
  const postMenu = isAuthor ? (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <IconButton onClick={handleToggleMenu}>
        <FaEllipsisV />
      </IconButton>
      <Menu visible={isMenuOpened}>
        <MenuItem onClick={handleShowUpdateForm}>
          <FaEdit /> Editar
        </MenuItem>
        <MenuItemDanger onClick={handleDelete}>
          <FaTrash /> Deletar
        </MenuItemDanger>
      </Menu>
    </OutsideClickHandler>
  ) : null;

  const postContent = (
    <>
      <PostHeader>
        <TitleWrapper>
          <PostTitle>{post.title}</PostTitle>
        </TitleWrapper>
        {postMenu}
      </PostHeader>
      <AuthorWrapper>
        <Avatar src="" size="sm" />
        <Author to={`/users/${post.author._id}`}>
          por {post.author.fullName}, {post.createdAge}
        </Author>
      </AuthorWrapper>
      <PostBody>{post.body}</PostBody>
      <TagList>{tags}</TagList>
      <ReactionsWrapper>
        <ReactionButton
          icon={<FaThumbsUp />}
          value={post.likeCount}
          onClick={handleLike}
          highlighted={isLiked}
        />
        <ReactionButton
          icon={<FaThumbsDown />}
          value={post.dislikeCount}
          onClick={handleDislike}
          highlighted={isDisliked}
        />
        <ReactionButton
          icon={<FaComment />}
          value={post.commentCount}
          onClick={handleShowCommentForm}
        />
      </ReactionsWrapper>
      {commentForm}
      <CommentList comments={post.comments} postId={post._id} />
    </>
  );

  // **************************************
  // EDIT POST FORM
  // **************************************
  const editForm = (
    <Form onSubmit={handleSubmit(handleUpdate)}>
      <Input
        type="text"
        name="title"
        labelText="Título"
        required
        onChange={handleChange}
        value={formValues.title}
        autoComplete="off"
        variant="title"
      />
      <TextArea
        name="body"
        required
        onChange={handleChange}
        value={formValues.body}
      />
      <Input
        type="text"
        name="tags"
        labelText="Tags"
        onChange={handleChange}
        value={formValues.tags}
        autoComplete="off"
      />
      <FlexRow>
        <Button
          type="submit"
          disabled={isLoading}
          stretch
          backgroundColor="secondary"
        >
          Salvar
        </Button>
        <Button
          onClick={() => setCardState("idle")}
          stretch
          backgroundColor="primary-accent"
        >
          Cancelar
        </Button>
      </FlexRow>
    </Form>
  );

  return (
    <StyledCard state={cardState}>
      {cardState === "editing" ? editForm : postContent}
    </StyledCard>
  );
};

export default PostCard;

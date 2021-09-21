import React from "react";
import styled from "styled-components";
import {
  FaComment,
  FaEllipsisV,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { dislikePost, likePost } from "../../slices/postsSlice";

const StyledItem = styled.li`
  padding: 1rem 2rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: var(--clr-light);
  color: var(--clr-dark);
  border-radius: 5px;
  border: 1px solid var(--clr-primary);
  box-shadow: 5px 5px var(--clr-primary);

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  & h2 {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: underline wavy var(--clr-secondary);
  }

  & h3 {
    color: var(--clr-secondary-accent);
    font-style: italic;
    font-size: 0.8rem;
    margin-bottom: 3rem;
  }

  &:hover {
    border: 1px solid var(--clr-secondary);
    box-shadow: 5px 5px var(--clr-secondary);
  }

  & p {
    margin-bottom: 3rem;
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledTag = styled.li`
  border-radius: 1rem;
  border: 1px solid var(--clr-secondary-accent);
  color: var(--clr-secondary-accent);
  padding: 0 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--clr-primary-accent);
    color: var(--clr-primary-accent);
  }
`;

const DotMenu = styled.div`
  height: 32px;
  flex: 0 0 32px;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: var(--clr-primary-light);
  }
`;

const ReactionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StyledReactionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: var(--clr-light);
  color: var(--clr-dark);
  border: 1px solid var(--clr-primary-light);
  border-radius: 2rem;
  font-family: var(--font-poppins);
  font-size: 1rem;

  &:hover {
    background-color: var(--clr-primary-light);
  }
`;

const ReactionButton = ({ icon, value, onClick }) => {
  return (
    <StyledReactionButton onClick={onClick}>
      {icon}
      {value}
    </StyledReactionButton>
  );
};

const PostCard = ({ postData }) => {
  const dispatch = useDispatch();

  // Format tags
  const tags = postData.tags.map((tag, index) => (
    <StyledTag key={index}>#{tag}</StyledTag>
  ));

  const handleLike = () => {
    console.log("Liked");
    dispatch(likePost(postData._id));
  };

  const handleDislike = () => {
    console.log("Disliked");
    dispatch(dislikePost(postData._id));
  };

  const handleComment = () => {
    console.log("Commented");
  };

  return (
    <StyledItem>
      <header>
        <h2>{postData.title}</h2>
        <DotMenu>
          <FaEllipsisV />
        </DotMenu>
      </header>
      <h3>
        by {postData.author.fullName}, {postData.age}
      </h3>
      <p>{postData.body}</p>
      <TagList>{tags}</TagList>
      <ReactionsWrapper>
        <ReactionButton
          icon={<FaThumbsUp />}
          value={postData.likeCount}
          onClick={handleLike}
        />
        <ReactionButton
          icon={<FaThumbsDown />}
          value={postData.dislikeCount}
          onClick={handleDislike}
        />
        <ReactionButton
          icon={<FaComment />}
          value={postData.commentCount}
          onClick={handleComment}
        />
      </ReactionsWrapper>
    </StyledItem>
  );
};

export default PostCard;

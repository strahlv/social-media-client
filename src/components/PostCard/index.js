import React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
  padding: 1rem 2rem;
  width: 600px;
  display: flex;
  flex-direction: column;
  color: var(--clr-dark);
  border-radius: 5px;
  box-shadow: 5px 5px var(--clr-primary-accent),
    -10px -10px 20px 10px var(--clr-secondary-light),
    10px 10px 20px 10px var(--clr-primary-light);

  &:nth-child(1) {
    box-shadow: 5px 5px var(--clr-secondary-accent),
      -10px -10px 20px 10px var(--clr-primary-light),
      10px 10px 20px 10px var(--clr-secondary-light);
  }

  & h2 {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: underline wavy var(--clr-secondary-accent);
    margin-bottom: 2rem;
  }

  &:nth-child(1) h2 {
    text-decoration-color: var(--clr-primary-accent);
  }

  & div {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
  }
`;

const StyledTag = styled.span`
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

const PostCard = ({ postData }) => {
  const tags = postData.tags.map((tag) => <StyledTag>{tag}</StyledTag>);

  return (
    <StyledItem key={postData._id}>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
      <div>{tags}</div>
    </StyledItem>
  );
};

export default PostCard;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled.li`
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
  transition: border 0.5s ease, box-shadow 0.5s ease, height 0.8s ease;
  opacity: ${(props) => (props.state === "loading" ? 0.5 : 1)};
  animation: fadeIn 0.5s ease;

  &:hover {
    border: 1px solid var(--clr-secondary);
    box-shadow: 3px 3px var(--clr-secondary);
  }

  @keyframes fadeIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Author = styled(Link)`
  color: var(--clr-secondary-accent);
  font-style: italic;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--clr-secondary);
  }
`;

export const PostAge = styled.p``;

export const PostBody = styled.p`
  padding: 2rem 0;
  margin-bottom: 1rem;
  border-top: 1px solid var(--clr-primary-light);
  border-bottom: 1px solid var(--clr-primary-light);
  white-space: pre-wrap;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledTag = styled.li`
  border-radius: 1rem;
  border: 1px solid var(--clr-secondary-accent);
  color: var(--clr-secondary-accent);
  padding: 0 5px;
  cursor: pointer;
  font-size: 0.75rem;
  line-height: 1rem;
  transition: color 0.2s ease, border 0.2s ease;

  &:hover {
    border: 1px solid var(--clr-primary-accent);
    font-style: italic;
    color: var(--clr-primary-accent);
  }
`;

export const ReactionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const StyledReactionButton = styled.button`
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
  transition: background 0.2s ease;

  &:hover {
    background-color: var(--clr-primary-light);
  }
`;

export const StyledHighlightedReactionButton = styled(StyledReactionButton)`
  background-color: var(--clr-primary-light);
`;

export const CommentFormWrapper = styled.div`
  margin-top: 1rem;
`;

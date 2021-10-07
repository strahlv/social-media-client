import styled from "styled-components";

export const StyledComment = styled.li`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid var(--clr-primary-light);
  border-radius: 0px;
  opacity: ${(props) => (props.isLoading ? 0.5 : 1)};

  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export const CommentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    margin: 0;
  }
`;

export const CommentAge = styled.p`
  color: var(--clr-secondary-accent);
  align-self: flex-end;
  font-size: 0.8rem;
  font-style: italic;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin: 0;
`;

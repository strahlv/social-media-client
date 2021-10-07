import styled from "styled-components";

export const WelcomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
  margin: 1rem 0 3rem;
  animation: fadeIn 1s ease;

  & span {
    font-style: italic;
    text-decoration: underline wavy var(--clr-primary-accent);
    opacity: 0;
    animation: fadeIn 0.5s ease 0.2s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

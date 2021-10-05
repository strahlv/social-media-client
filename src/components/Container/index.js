import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: var(--clr-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  min-height: 100vh;
  margin: auto;
  padding: 3rem 2rem;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: var(--clr-light);
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.flexJustify || "center"};
  align-items: ${(props) => props.flexAlign || "center"};
  max-width: 1100px;
  min-height: 100vh;
  margin: auto;
  padding: 3rem 2rem;
`;

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;

import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: ${(props) => props.color || "var(--clr-light)"};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.flexJustify || "center"};
  align-items: ${(props) => props.flexAlign || "center"};
  max-width: 1100px;
  --footer-size: 100px;
  min-height: calc(100vh - var(--footer-size));
  margin: auto;
  padding: 3rem 2rem;
`;

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;

import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  min-height: calc(100vh - var(--footer-height));
  margin: auto;
  background: ${(props) => props.color || "var(--clr-light)"};
`;

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;

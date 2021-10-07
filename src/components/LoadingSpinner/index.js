import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 4px solid var(--clr-primary);
  border-top: 4px solid transparent;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;

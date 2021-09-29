import React from "react";
import styled, { keyframes } from "styled-components";

const backgroundColorShift = keyframes`
from {
  background: var(--clr-primary);
}
to {
  background: var(--clr-secondary);
}
`;

const StyledLoadingScreen = styled.div`
  width: 100%;
  height: 100vh;
  animation: ${backgroundColorShift} 2s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingScreen = () => {
  return <StyledLoadingScreen />;
};

export default LoadingScreen;

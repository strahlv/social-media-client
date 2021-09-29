import styled from "styled-components";

export const FlexCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "1rem"};
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  gap: ${(props) => props.gap || "1rem"};
`;

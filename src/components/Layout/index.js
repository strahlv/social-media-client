import styled from "styled-components";

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  gap: ${(props) => props.gap || "1rem"};
  padding: ${(props) => props.padding || 0};
`;

export const FlexCol = styled(FlexRow)`
  flex-direction: column;
`;

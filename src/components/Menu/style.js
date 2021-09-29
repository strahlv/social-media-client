import styled from "styled-components";

export const StyledMenuContainer = styled.div`
  align-self: flex-start;
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: relative;
`;

export const StyledMenuItems = styled.div`
  position: absolute;
  top: 0.5rem;
  left: calc(-100px + 16px);
  width: 200px;
  display: flex;
  flex-direction: column;
  background: var(--clr-light);
  border: 1px solid var(--clr-primary);
  border-radius: 5px;
  box-shadow: 5px 5px var(--clr-primary);
  overflow: hidden;
`;

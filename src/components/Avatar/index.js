import React from "react";
import styled from "styled-components";
import placeholderPic from "../../imgs/userIcon.png";

const StyledAvatar = styled.img`
  border-radius: 50%;
  border: 1px solid var(--clr-primary);
  box-shadow: 2px 2px var(--clr-primary);
  --size: ${(props) => props.size || "64px"};
  width: var(--size);
  height: var(--size);
  margin-right: 1rem;
  float: ${(props) => props.float};
`;

const Avatar = ({ src, size = "sm", float = "none" }) => {
  if (!src) {
    src = placeholderPic;
  }

  let avatarSize;
  switch (size) {
    case "sm":
      avatarSize = 32;
      break;
    case "md":
      avatarSize = 48;
      break;
    case "lg":
      avatarSize = 64;
      break;
    case "xl":
      avatarSize = 128;
      break;
    case "xl2":
      avatarSize = 256;
      break;
    default:
      break;
  }

  return <StyledAvatar src={src} size={`${avatarSize}px`} float={float} />;
};

export default Avatar;

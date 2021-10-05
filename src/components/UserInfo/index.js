import React from "react";
import styled from "styled-components";

const UserInfo = ({ icon, data }) => {
  return (
    <Wrapper>
      {icon}
      {data}
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

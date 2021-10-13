import styled from "styled-components";
import Container from "../Container";

export const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: auto;
  max-width: 1100px;
  color: white;
  text-align: center;

  @media screen and (min-width: 600px) {
    margin: 5rem auto 3rem;
  }
`;

export const UserFullName = styled.h1`
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 2.5rem;
`;

export const UserBio = styled.p`
  margin-top: 1rem;
  font-weight: 200;
  line-height: 1rem;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    /* flex-direction: column; */
  }
`;

export const PostsContainer = styled(Container)`
  padding: 3rem 2rem;
  min-height: 0;
`;

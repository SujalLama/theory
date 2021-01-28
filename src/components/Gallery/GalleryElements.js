import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #4286f7;
  padding: 2em 0;
`;

export const Heading = styled.h2`
  text-align: center;
  color: #fff;
`;

export const SubHead = styled.p`
  text-align: center;
  color: #fff;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  margin: 2em auto;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ProfileName = styled.h4`
  margin-top: 1em;
`;

export const ProfileSurName = styled.p`
  color: #ddd;
`;

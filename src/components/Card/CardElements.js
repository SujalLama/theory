import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 2em;
  /* margin: 1em 0; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentOne = styled.div`
  margin-bottom: 3em;

  border-right: 3px solid #ddd;
  padding-right: 1em;
  margin-right: 1em;

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid #ddd;
    padding-bottom: 2em;
    padding-right: 0;
    border-right: 0;
  }
`;

export const ContentTwo = styled.div`
  margin-left: 1em;
  margin-bottom: 3em;
  border-right: 3px solid #ddd;
  padding-right: 1em;
  margin-right: 1em;

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid #ddd;
    padding-bottom: 2em;
    margin-left: 0;
    padding-right: 0;
    border-right: 0;
  }
`;

export const ContentThree = styled.div`
  margin-left: 1em;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ContentTitle = styled.h2`
  color: #0248d4;
  margin-bottom: 1em;
  font-weight: 300;
`;

export const ContentP = styled.p`
  color: #888;
  margin-bottom: 1em;
`;

export const ContentBtn = styled.button`
  outline: none;
  border: none;
  padding: 0.4em 0.6em;
  background: #0248d4;
  color: #fff;
  font-size: 1.2em;
  margin-bottom: 0.6em;

  border-radius: 5px;
`;

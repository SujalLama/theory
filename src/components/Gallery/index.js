import React from "react";
import {
  Wrapper,
  Heading,
  SubHead,
  ProfileWrapper,
  Profile,
  ImageWrapper,
  ProfileName,
  ProfileSurName
} from "./GalleryElements";

const Gallery = () => {
  return (
    <>
      <Wrapper>
        <Heading>Ipsum Feugiat</Heading>
        <SubHead>Semper suscipit posuere apede</SubHead>
        <ProfileWrapper>
          <Profile>
            <ImageWrapper>
              <img src="https://images.unsplash.com/photo-1603076174779-8565218280c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80" />
            </ImageWrapper>
            <ProfileName>Magna</ProfileName>
            <ProfileSurName>Cipdum dolor</ProfileSurName>
          </Profile>

          <Profile>
            <ImageWrapper>
              <img src="https://images.unsplash.com/photo-1603076174779-8565218280c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80" />
            </ImageWrapper>
            <ProfileName>Magna</ProfileName>
            <ProfileSurName>Cipdum dolor</ProfileSurName>
          </Profile>

          <Profile>
            <ImageWrapper>
              <img src="https://images.unsplash.com/photo-1603076174779-8565218280c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80" />
            </ImageWrapper>
            <ProfileName>Magna</ProfileName>
            <ProfileSurName>Cipdum dolor</ProfileSurName>
          </Profile>

          <Profile>
            <ImageWrapper>
              <img src="https://images.unsplash.com/photo-1603076174779-8565218280c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80" />
            </ImageWrapper>
            <ProfileName>Magna</ProfileName>
            <ProfileSurName>Cipdum dolor</ProfileSurName>
          </Profile>
        </ProfileWrapper>
      </Wrapper>
    </>
  );
};

export default Gallery;

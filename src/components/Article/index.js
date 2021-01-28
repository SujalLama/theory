import React from "react";
import {
  CardContainer,
  ContentOne,
  ContentTwo,
  ImageWrapper,
  ContentTitle,
  ContentP,
  ContentBtn,
  Wrapper
} from "./ArticleElements";

const Article = () => {
  return (
    <>
      <Wrapper>
        <CardContainer>
          <ContentOne>
            <ImageWrapper>
              <img src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            </ImageWrapper>
            <ContentTitle>Praesent placerat magna</ContentTitle>
            <ContentP>
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
              dui mi, tincidunt quis, accumsan porttitor lorem ipsum.
            </ContentP>
            <ContentBtn>More</ContentBtn>
          </ContentOne>

          <ContentTwo>
            <ImageWrapper>
              <img src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImageWrapper>
            <ContentTitle>Fusce pellentesque tempus</ContentTitle>
            <ContentP>
              Sed adipiscing ornare risus. Morbi est est, blandit sit amet,
              sagittis vel, euismod vel, velit. Pellentesque egestas sem.
              Suspendisse commodo ullamcorper magna non comodo sodales tempus.
            </ContentP>
            <ContentBtn>More</ContentBtn>
          </ContentTwo>
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default Article;

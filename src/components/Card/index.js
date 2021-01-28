import React from "react";
import {
  CardContainer,
  ContentOne,
  ContentTwo,
  ContentThree,
  ContentTitle,
  ContentP,
  ContentBtn
} from "./CardElements";

const Card = () => {
  return (
    <>
      <CardContainer className="container">
        <ContentOne>
          <ContentTitle>Magna tempus sed amet aliquam veroeros</ContentTitle>
          <ContentP>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu.
          </ContentP>
          <ContentBtn>More</ContentBtn>
        </ContentOne>

        <ContentTwo>
          <ContentTitle>Magna tempus sed amet aliquam veroeros</ContentTitle>
          <ContentP>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu.
          </ContentP>
          <ContentBtn>More</ContentBtn>
        </ContentTwo>

        <ContentThree>
          <ContentTitle>Magna tempus sed amet aliquam veroeros</ContentTitle>
          <ContentP>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu.
          </ContentP>
          <ContentBtn>More</ContentBtn>
        </ContentThree>
      </CardContainer>
    </>
  );
};

export default Card;

import React from "react";
import styled, { css } from "styled-components";
/**
 * const  StyledCard = styled.tag(h1, h2,... div, span, strong, section,...)
 * */

const StyledCard = styled.div`
  position: relative;
  /* width: 400px; */
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  /* width: calc(100% - 36px); */
  width: 364px;
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const CardAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  color: #333;
  font-family: poppins;
  font-size: 16px;
  font-weight: 300;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
const CardAmount = styled.span`
  font-size: ${(props) => props.fontSize || "18px"};
  font-family: poppins;
  font-weight: 700;
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(59deg, #20e3b2, #2cccff);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        59deg,
        #7d6aff 0%,
        #ffb86c 53.13%,
        #fc2872 100%
      );
    `};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const CardMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const CardMetaSpan = styled.span`
  color: #333;
  font-family: poppins;
  font-weight: 400;
`;

const Card = (props) => {
  console.log(`Card`, props);
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1200x900"
          alt="img"
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <CardAvatar
              src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1200x900"
              alt="avatar"
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta>
            <img src="/coolicon.svg" alt="icon_heart" />
            <CardMetaSpan>256</CardMetaSpan>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary}>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;

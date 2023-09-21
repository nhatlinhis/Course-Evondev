import React from "react";
import styled, { css } from "styled-components";
/**
 * const  StyledCard = styled.tag(h1, h2,... div, span, strong, section,...)
 * */

// cách 2
const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    .card-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
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
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
        .card-avatar {
          height: 30px;
          width: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }
        .user-name {
          color: ${(props) => props.theme.orange};
          font-family: poppins;
          font-size: 16px;
          font-weight: 300;
        }
      }
      .card-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        .cardmeta-span {
          color: #333;
          font-family: poppins;
          font-weight: 400;
        }
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-title {
        font-size: 18px;
        font-weight: 500;
        /* color: #000; */
        color: ${(props) => props.theme.colors.blue};
      }
      .card-amount {
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
      }
    }
  }
`;

// cách 1
// const StyledCard = styled.div`
//   position: relative;
//   /* width: 400px; */
// `;
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

const Card2 = (props) => {
  console.log(`Card`, props);
  return (
    <StyledCard>
      <div className="card-image">
        <img
          className="card-img"
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1200x900"
          alt="img"
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="card-avatar"
              src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1200x900"
              alt="avatar"
            />
            <span className="card-avatar">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/coolicon.svg" alt="icon_heart" />
            <span className="cardmeta-span">256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount" secondary={props.secondary}>
            12,000 PSL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;

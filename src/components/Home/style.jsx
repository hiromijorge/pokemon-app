import { css } from "@emotion/react";

export const base = css`
  background: radial-gradient(#fff, #ffd6d6);
`;

export const container = css`
  max-width: 1300px;
  min-height: 750px;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

export const row = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const col = css`
  flex-basis: 50%;
  padding: 20px;
  @media (max-width: 800px) {
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const h2 = css`
  font-size: 50px;
  line-height: 60px;
  @media (max-width: 800px) {
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 400px) {
    line-height: 50px;
    font-size: 35px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const subTitle = css`
  font-size: 20px;
  line-height: 30px;
  @media (max-width: 800px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const img = css`
  width: 100%;
  @media (max-width: 800px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const button = css`
  display: inline-block;
  background-color: #ff523b;
  color: #fff;
  padding: 8px 30px;
  margin: 0px 0;
  border-radius: 30px;
  transition: background 0.5s;
  @media (max-width: 800px) {
    padding: 15px 40px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  &:hover {
    background: #563434;
  }
  text-decoration: none;
`;

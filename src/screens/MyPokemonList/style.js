import { css } from "@emotion/react";

export const base = css`
  background: radial-gradient(#fff, #ef6079ff);
`;

export const container = css`
  max-width: 1000px;
  min-height: 750px;
  margin: auto;
`;

export const title = css`
  text-align: center;
  color: #ffd6d6;
  padding: 30px 0;
`;

export const row = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const col = css`
  position: relative;
  flex-basis: 20%;
  min-width: 180px;
  margin: 20px;
  border-width: 2px;
  background: radial-gradient(#fff, #3e9936);
  box-shadow: 5px 10px 10px #888888;
  padding-top: 10px;
  @media (max-width: 800px) {
    flex-basis: 50%;
  }
`;
export const deleteIcon = css`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 8px;
  right: 7px;
  &:hover {
    cursor: pointer;
  }
`;

export const pokemonImg = css`
  width: 100%;
  padding: 20px;
`;

export const pokemonName = css`
  text-align: center;
  font-size: 25px;
  color: #786f40;
`;

export const userName = css`
  border-width: 2px;
  background: radial-gradient(#fff, #328194);
  padding: 20px;
  text-align: center;
  font-size: 25px; ;
`;

export const box = css`
  width: 200px;
  height: 200px;
  background: blue;
`;

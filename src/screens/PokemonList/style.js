import { css } from "@emotion/react";

export const base = css`
  background: radial-gradient(#fff, #ef6079ff);
`;

export const container = css`
  max-width: 1000px;
  width: 100%;
  margin: auto;
`;

export const title = css`
  text-align: center;
  color: #ffd6d6;
  padding: 30px 0;
`;

export const row = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const col4 = css`
  flex-basis: 100%;
  min-width: 180px;
  border-width: 2px;
  border-radius: 50px;
  background: radial-gradient(#fff, #ffd6d6);
  box-shadow: 5px 10px 18px #888888;
  @media (max-width: 800px) {
    flex-basis: 100%;
    min-width: 200px;
  }
`;

export const link = css`
  margin: 20px;
  text-decoration: none;
  color: black;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const img = css`
  width: 100%;
  padding: 10px;
`;

export const name = css`
  text-align: center;
  font-size: 20px;
`;

export const pokemonCountContainer = css`
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: black;
`;

export const pokeballImg = css`
  width: 50px;
  height: 50px;
`;

export const pokemonCount = css`
  font-size: 30px;
`;

export const btnContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const btnInnerContainer = css`
  width: 50px;
  height: 50px;
  margin: 20px 30px;
  text-align: center;
`;

export const btn = css`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #ffd44a;
  color: #fff;
  text-align: center;
  font-size: 35px;
  border: 0px;
  transition: background 0.5s;
  border-radius: 50%;
  &:hover {
    background: #563434;
  }
`;
export const btnDisabled = css`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #563434;
  color: #fff;
  text-align: center;
  font-size: 35px;
  border: 0px;
  transition: background 0.5s;
  border-radius: 50%;
`;

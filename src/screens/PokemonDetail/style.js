import { css } from "@emotion/react";

export const container = css`
  margin: auto;
  background: radial-gradient(#fff, #ef6079ff);
`;

export const row = css`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const row1 = css`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
export const row2 = css`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  padding-bottom: 50px;
`;
export const row2P = css`
  font-size: 20px;
  font-style: oblique;
  border-radius: 20px 50px;
  color: white;
  background: #30d5c8;
  padding: 20px 50px;
  box-shadow: 5px 10px 18px #888888;
  @media (max-width: 800px) {
    margin-right: 20px;
    margin-left: 20px;
    padding: 15px 45px;
  }
  @media (max-width: 500px) {
    margin-right: 20px;
    margin-left: 20px;
    padding: 12px 22px;
    font-size: 18px;
  }
  @media (max-width: 300px) {
    margin-right: 20px;
    margin-left: 20px;
    padding: 10px 18px;
    font-size: 15px;
  }
`;

export const row3 = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const innerRow3 = css`
  flex-basis: 20%;
  padding: 5px 10px;
  margin: 10px;
  background: lightblue;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
`;

export const pokemonMove = css`
  width: 100px;
`;

export const img = css`
  width: 200px;
  border-radius: 20px;
  border-style: outside;
  padding: 10px 5px;
  background: radial-gradient(#fff, #ffd6d6);
  box-shadow: 5px 10px 18px #888888;
`;

export const pokemonName = css`
  margin: 20px;
  font-size: 25px;
  font-style: normal;
`;

export const row4 = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const catchPokemonBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff523b;
  color: #fff;
  padding: 8px 30px;
  margin: 0px 0;
  border-radius: 30px;
  transition: background 0.5s;
  &:hover {
    background: #563434;
  }
  text-decoration: none;
  box-shadow: 5px 10px 18px #888888;
`;

export const row4Img = css`
  width: 70px;
  height: 70px;
  @media (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
`;

export const row4P = css`
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

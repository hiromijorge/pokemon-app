import { css } from "@emotion/react";

export const pokemonImage = css`
  width: 250px;
  height: 200px;
  @media (max-width: 600px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 400px) {
    width: 130px;
    height: 130px;
  }
`;

export const pokemonName = css`
  font-size: 35px;
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const container = css`
  max-width: 100%;
  background: radial-gradient(#fff, #ef6079ff);
  padding: 80px 0px;
`;

export const cardContainer = css`
  max-width: 400px;
  margin: auto;
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
`;

export const card = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  padding: 20px 0px;
  background: radial-gradient(#fff, #3e9936);
`;

export const title = css`
  font-size: 20px;
  text-align: center;
  color: ;
  @media (max-width: 600px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const input = css`
  width: 270px;
  height: 50px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5%;
  box-shadow: 5px 10px 18px #888888;
  @media (max-width: 600px) {
    width: 220px;
    height: 45px;
    font-size: 12px;
  }
  @media (max-width: 400px) {
    width: 160px;
    height: 45px;
    font-size: 8px;
  }
`;

export const saveBtn = css`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  font-size: 18px;
  background-color: #3c7d41;
  color: white;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
  &:hover {
    background-color: #563434;
  }
  @media (max-width: 400px) {
    width: 130px;
    height: 30px;
    font-size: 12px;
  }
`;
export const saveBtnDisabled = css`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  font-size: 18px;
  background-color: #3c7d41;
  color: white;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }

  @media (max-width: 400px) {
    width: 130px;
    height: 30px;
    font-size: 12px;
  }
`;

export const releaseBtn = css`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  font-size: 18px;
  background-color: #bf2d00;
  color: white;
  &:hover {
    background-color: #563434;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
  @media (max-width: 400px) {
    width: 130px;
    height: 30px;
    font-size: 12px;
  }
`;

//uncaught pokemon

export const containerTwo = css`
  max-width: 600px;
  margin: auto;
`;

export const rowTwo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const pokemonImageTwo = css`
  width: 400px;
  height: 400px;
  padding: 50px;
`;

export const titleTwo = css`
  color: green;
`;

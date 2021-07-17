import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  background: radial-gradient(#fff, #ffd6d6);
  padding: 10px;
  position: sticky;
  bottom: 0;
`;

export const row = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const img = css`
  width: 80px;
  height: 80px;
  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
  }
`;

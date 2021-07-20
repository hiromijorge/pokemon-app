import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  margin: auto;
  background: radial-gradient(#fff, #ffd6d6);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const navbar = css`
  display: flex;
  align-items: center;
  padding-top: 15px;
  margin-right: 20px;
  margin-left: 20px;
  padding-bottom: 15px;
`;

export const homeLogo = css`
  height: 60px;
  @media (max-width: 400px) {
    height: 40px;
  }
`;

export const navigationLinkOn = css`
  flex: 1;
  text-align: right;
  @media (max-width: 800px) {
    position: absolute;
    left: 0;
    width: 100%;
    top: 80px;
    background: radial-gradient(#fff, #d3d3d3);
    max-height: 200px;
    transition: max-height 0.5s;
  }
`;

export const navigationLinkOff = css`
  flex: 1;
  text-align: right;
  @media (max-width: 800px) {
    position: absolute;
    max-height: 0;
    left: 0;
    width: 100%;
    top: 100px;
    background: radial-gradient(#fff, #d3d3d3);
    transition: max-height 0.5s;
  }
`;

export const linkOn = css`
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  font-size: 18px;
  color: #555;
  @media (max-width: 800px) {
    display: block;
    max-width: auto;
    transition: max-width 0.5s;
  }
`;

export const linkOff = css`
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  font-size: 18px;
  color: #555;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const menuIcon = css`
  display: none;
  width: 30px;
  @media (max-width: 800px) {
    display: block;
    position: absolute;
    right: 0;
    margin-right: 20px;
    cursor: pointer;
  }
`;

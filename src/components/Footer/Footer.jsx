/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import * as style from "./style";
import images from "../../constants/index";

const Footer = () => {
  const { catchPokemon } = images;
  return (
    <div className="container" css={style.container}>
      <div className="row" css={style.row}>
        <Link to="/mypokemonlist" data-testid="mypokemonlist-link">
          <img src={catchPokemon.default} alt="" css={style.img} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

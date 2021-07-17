/** @jsxRuntime classic */
/** @jsx jsx */

import { useContext } from "react";
import { jsx } from "@emotion/react";

import { Context as PokemonContext } from "../../context/PokemonContext";

import images from "../../constants/index";
import * as style from "./style";

const MyPokemonListPage = () => {
  const { state, deletePokemon } = useContext(PokemonContext);
  const { deleteIcon } = images;

  return (
    <div css={style.base}>
      <h1 css={style.title}>My Pokemon List</h1>
      <div className="container" css={style.container}>
        <div className="row" css={style.row}>
          {state.map((item) => {
            return (
              <div className="col" css={style.col}>
                <img
                  src={deleteIcon.default}
                  alt="Delete Icon"
                  css={style.deleteIcon}
                  onClick={() => deletePokemon(item.userName)}
                />
                <p css={style.pokemonName}>{item.pokemonName}</p>
                <img
                  src={item.pokemonImg}
                  alt="Pokemon Image"
                  css={style.pokemonImg}
                />
                <p css={style.userName}>{item.userName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPokemonListPage;

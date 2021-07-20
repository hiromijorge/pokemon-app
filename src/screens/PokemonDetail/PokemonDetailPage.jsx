/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { Context as PokemonContext } from "../../context/PokemonContext";

import * as GET_POKEMONS from "../../api/get-pokemon-detail";
import * as style from "./style";
import images from "../../constants/index";

export const testQuery = GET_POKEMONS.getPokemonDetails_Query;
const PokemonDetailPage = () => {
  const { onCatchPokemon } = useContext(PokemonContext);
  const { catchPokemon } = images;
  const { name } = useParams();

  const gqlVariables = {
    name: name,
  };

  const { loading, error, data } = useQuery(
    GET_POKEMONS.getPokemonDetails_Query,
    {
      variables: gqlVariables,
    }
  );
  if (loading) return null;
  if (error) return `Error! ${error.message}`;
  return (
    <div className="container" css={style.container}>
      <div className="row" css={style.row}>
        <div className="row1" css={style.row1}>
          <p css={style.pokemonName}>{name}</p>
          <img src={data.pokemon.sprites.front_shiny} alt="" css={style.img} />
        </div>

        <div className="row2" css={style.row2}>
          {data.pokemon.types.map((item, index) => (
            <div key={index} data-testid="pokemon-types">
              <p css={style.row2P}>{item.type.name}</p>
            </div>
          ))}
        </div>

        <div className="row3" css={style.row3}>
          {data.pokemon.moves.map((item, index) => (
            <div key={index} css={style.innerRow3} data-testid="pokemon-moves">
              <p css={style.pokemonMove}>{item.move.name}</p>
            </div>
          ))}
        </div>
        <div css={style.row4}>
          <Link
            data-testid="catch-btn"
            to={`/catchpokemon/${name}`}
            onClick={() =>
              onCatchPokemon(
                name,
                data.pokemon.sprites.front_shiny,
                data.pokemon.sprites.back_shiny
              )
            }
            css={style.catchPokemonBtn}
          >
            <img src={catchPokemon.default} alt="" css={style.row4Img} />
            <p css={style.row4P}>Catch Pokemon</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;

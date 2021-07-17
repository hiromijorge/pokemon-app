/** @jsxRuntime classic */
/** @jsx jsx */

import { useEffect, useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { jsx } from "@emotion/react";

import * as GET_POKEMONS from "../../api/get-pokemon";
import * as style from "./style";
import { Link } from "react-router-dom";
import images from "../../constants/index";

import { Context as PokemonContext } from "../../context/PokemonContext";

export const testQuery = GET_POKEMONS.getAllPokemon_Query;

const MyPokemonListPage = () => {
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(20);
  const { state } = useContext(PokemonContext);
  const { catchPokemon } = images;
  var countPokemon = 0;

  const onCountPokemon = (pokemonName) => {
    for (let i in state) {
      if (state[i].pokemonName === pokemonName) {
        countPokemon += 1;
      }
    }
  };

  const resetCountPokemon = () => {
    countPokemon = 0;
  };

  const gqlVariables = {
    offset: offset,
  };
  const handleBtnPress = (id) => {
    if (id === "next") {
      setPage(page + 1);
      setOffset(offset + 20);
    } else if (id === "prev") {
      setPage(page - 1);
      setOffset(offset - 20);
    }
  };

  useEffect(() => {}, [page]);

  const { loading, error, data } = useQuery(GET_POKEMONS.getAllPokemon_Query, {
    variables: gqlVariables,
  });

  if (loading) return <div>Loading products...</div>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="base" css={style.base}>
      <h1 data-testid="title" css={style.title}>
        Pokemon List
      </h1>
      <div className="container" css={style.container}>
        <div className="row" css={style.row}>
          {data.pokemons.results.map((pokemon) => {
            return (
              <Link
                to={`/pokemondetail/${pokemon.name}`}
                css={style.link}
                key={pokemon.id}
              >
                {onCountPokemon(pokemon.name)}
                <div className="col-4" css={style.col4} key={pokemon.name}>
                  <img src={pokemon.image} alt="" css={style.img} />
                  <p css={style.name}>{pokemon.name}</p>
                  <div css={style.pokemonCountContainer}>
                    <img
                      src={catchPokemon.default}
                      alt="Pokeball"
                      css={style.pokeballImg}
                    />
                    <p css={style.pokemonCount}>{countPokemon}</p>
                  </div>
                  {resetCountPokemon()}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="button" css={style.btnContainer}>
        <div className="button-prev" css={style.btnInnerContainer}>
          {page === 0 ? (
            <button
              disabled
              onClick={() => handleBtnPress("prev")}
              css={style.btnDisabled}
            >
              &#8249;
            </button>
          ) : (
            <button onClick={() => handleBtnPress("prev")} css={style.btn}>
              &#8249;
            </button>
          )}
        </div>
        <p>{page}</p>
        <div className="button-next" css={style.btnInnerContainer}>
          <button onClick={() => handleBtnPress("next")} css={style.btn}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPokemonListPage;

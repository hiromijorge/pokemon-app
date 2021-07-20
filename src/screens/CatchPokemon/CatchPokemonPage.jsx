/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context as PokemonContext } from "../../context/PokemonContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import * as style from "./style";

const CatchPokemonPage = () => {
  let history = useHistory();
  const { name } = useParams();
  const { savePokemon, tempPokemonData, checkStatus, checkName, addPokemon } =
    useContext(PokemonContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (checkName !== undefined) {
      saveNameResult();
    }
  }, [checkName]);

  const onSaveBtn = () => {
    savePokemon(userName);
  };

  const onReleaseBtn = () => {
    if (window.confirm("Are you sure you want to released the Pokemon?")) {
      history.push("/pokemonlist");
    }
  };

  const saveNameResult = () => {
    if (checkName) {
      alert("Nama Sudah Ada");
    } else {
      var r = window.confirm("Are you sure you want to save the Pokemon?");
      if (r) {
        addPokemon(tempPokemonData.name, userName, tempPokemonData.caughtImg);
        history.push("/mypokemonlist");
      } else {
      }
    }
  };

  return (
    <div className="container">
      <div
        style={checkStatus === 1 ? { display: "block" } : { display: "none" }}
        css={style.container}
      >
        <div css={style.cardContainer}>
          <form>
            <div css={style.card}>
              <h1 css={style.pokemonName}>{tempPokemonData.name}</h1>
              <img
                src={tempPokemonData.caughtImg}
                alt="Pokemon Image"
                css={style.pokemonImage}
              />
              <h2 css={style.title}>
                Congratulations Pokemon <br /> have been caught
              </h2>
              <input
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
                css={style.input}
                placeholder="Enter name of the pokemon"
              />

              {userName === "" ? (
                <Link to="/mypokemonlist">
                  <button
                    disabled
                    onClick={onSaveBtn}
                    css={style.saveBtnDisabled}
                  >
                    Save Pokemon
                  </button>
                </Link>
              ) : (
                <button onClick={onSaveBtn} css={style.saveBtn}>
                  Save Pokemon
                </button>
              )}

              <button
                type="submit"
                onClick={onReleaseBtn}
                css={style.releaseBtn}
              >
                Release Pokemon
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        style={checkStatus !== 1 ? { display: "block" } : { display: "none" }}
        css={style.container}
      >
        <div css={style.containerTwo}>
          <img src="" alt="" />
          <div css={style.rowTwo}>
            <h1 css={style.titleTwo}>Pokemon Failed to Catch</h1>
            <img
              css={style.pokemonImageTwo}
              src={tempPokemonData.uncaughtImg}
              alt="Uncaught Pokemon"
            />
            <h2>{tempPokemonData.name} has run away</h2>
            <h2>Try again later!!!</h2>

            <Link to={`/pokemondetail/${name}`} data-testid="catchagain-link">
              <button css={style.saveBtn}>Catch Again</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchPokemonPage;

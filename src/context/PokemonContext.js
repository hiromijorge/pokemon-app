import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem("pokemonData");
    return localData ? JSON.parse(localData) : [];
  });
  const [tempPokemonData, setTempPokemonData] = useState(() => {
    const localData = localStorage.getItem("pokemonTemp");
    return localData ? JSON.parse(localData) : [];
  });
  const [checkStatus, setCheckStatus] = useState(() => {
    const localData = localStorage.getItem("checkStatus");
    return localData ? JSON.parse(localData) : 0;
  });

  const [checkName, setCheckName] = useState(undefined);
  var random = 0;

  useEffect(() => {
    localStorage.setItem("pokemonTemp", JSON.stringify(tempPokemonData));
    localStorage.setItem("checkStatus", JSON.stringify(checkStatus));
    localStorage.setItem("pokemonData", JSON.stringify(state));
  }, [tempPokemonData, checkStatus, checkName, state]);

  const onCatchPokemon = (
    pokemonName,
    caughtPokemonImg,
    uncaughtPokemonImg
  ) => {
    random = Math.floor(Math.random() * 2);
    if (random === 1) {
      pokemonCaught(pokemonName, caughtPokemonImg);
    } else {
      pokemonUncaught(pokemonName, uncaughtPokemonImg);
    }
  };

  const pokemonCaught = (pokemonName, caughtPokemonImg) => {
    setTempPokemonData({ name: pokemonName, caughtImg: caughtPokemonImg });
    setCheckStatus(1);
  };

  const pokemonUncaught = (pokemonName, uncaughtPokemonImg) => {
    setTempPokemonData({ name: pokemonName, uncaughtImg: uncaughtPokemonImg });
    setCheckStatus(0);
  };

  const savePokemon = (userName) => {
    const exist = state.find((item) => item.userName === userName);
    setCheckName(!!exist);
  };

  const addPokemon = (pokemonName, userName, pokemonImg) => {
    setState([...state, { pokemonName, userName, pokemonImg }]);
    resetName();
  };

  const deletePokemon = (userName) => {
    var yow = state.filter((item) => item.userName !== userName);
    setState(yow);
  };

  const resetName = () => {
    setCheckName(undefined);
  };

  return (
    <Context.Provider
      value={{
        state,
        onCatchPokemon,
        savePokemon,
        tempPokemonData,
        checkStatus,
        checkName,
        addPokemon,
        deletePokemon,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

import { screen, render, fireEvent } from "@testing-library/react";
import MyPokemonListPage from "../MyPokemonListPage";
import { Context } from "../../../context/PokemonContext";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

let history = createMemoryHistory();

var mocks = [
  {
    userName: "John",
    url: "https://pokeapi.co/api/v2/pokemon/21/",
    pokemonName: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    id: 1,
  },
  {
    userName: "Bam",
    url: "https://pokeapi.co/api/v2/pokemon/21/",
    pokemonName: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    id: 2,
  },
];

const provider = {
  state: mocks,
  deletePokemon: function (userName) {
    mocks = mocks.filter((item) => item.userName !== userName);
  },
};

const renderWithContext = (components) => {
  return {
    ...render(
      <Router history={history}>
        <Context.Provider value={provider}>{components}</Context.Provider>
      </Router>
    ),
  };
};

it("Should Render All Element in Screen", async () => {
  const { getByText, getAllByTestId } = renderWithContext(
    <MyPokemonListPage />
  );

  const headingElement = screen.getByText(/My Pokemon List/i);
  const pokemonNameElement = screen.getByText("pikachu");
  const deleteElement = screen.getAllByAltText("Delete Icon");

  expect(headingElement).toBeInTheDocument();
  expect(pokemonNameElement).toBeInTheDocument();
  expect(headingElement).toBeVisible();
  expect(pokemonNameElement).toBeVisible();
  expect(deleteElement.length).toBe(2);

  fireEvent.click(deleteElement[0]);

  let len = Object.values(provider.state).flat().length;

  expect(deleteElement.length).toBe(len);
});

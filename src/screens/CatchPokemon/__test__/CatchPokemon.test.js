import { screen, render, fireEvent } from "@testing-library/react";
import CatchPokemonPage from "../CatchPokemonPage";
import { Route, Router } from "react-router-dom";
import { Context } from "../../../context/PokemonContext";
import { createMemoryHistory } from "history";

const mocks = [
  {
    url: "https://pokeapi.co/api/v2/pokemon/21/",
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    id: 1,
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/21/",
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    id: 2,
  },
];

const provider = {
  tempPokemonData: mocks[0],
};

test("Pokemon List", async () => {
  renderWithRouter(<CatchPokemonPage />);

  const headingElement = screen.getByText("pikachu");

  expect(headingElement.textContent).toBe("pikachu");
});

const renderWithRouter = (
  components,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    history,
    ...render(
      <Router history={history}>
        <Route path={path}>
          <Context.Provider value={provider}>{components}</Context.Provider>
        </Route>
      </Router>
    ),
  };
};

it("should render all element test", async () => {
  renderWithRouter(<CatchPokemonPage />, {
    route: "/catchpokemon/spearow",
    path: "/catchpokemon/:name",
  });
  const pokemonName = screen.getAllByRole("heading");
  const buttonElement = screen.getByRole("button", { name: "Catch Again" });

  expect(pokemonName.length).toBe(3);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeVisible();
});

it("should be able to type input", async () => {
  renderWithRouter(<CatchPokemonPage />, {
    route: "/catchpokemon/spearow",
    path: "/catchpokemon/:name",
  });

  const inputElement = screen.getByPlaceholderText(
    /Enter name of the pokemon/i
  );
  fireEvent.change(inputElement, {
    target: { value: "Jack" },
  });
  expect(inputElement.value).toBe("Jack");
});

it("should be able to change page when button is clicked", async () => {
  const { history, getByText } = renderWithRouter(<CatchPokemonPage />, {
    route: "/catchpokemon/spearow",
    path: "/catchpokemon/:name",
  });

  const catchAgainLinkElement = screen.getByTestId("catchagain-link");
  fireEvent.click(catchAgainLinkElement);

  expect(history.location.pathname).toBe("/pokemondetail/spearow");
});

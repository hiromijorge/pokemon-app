import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import PokemonListPage from "../PokemonListPage";
import Provider, { Context } from "../../../context/PokemonContext";
import { createMemoryHistory } from "history";
import { MockedProvider } from "@apollo/client/testing";
import { testQuery } from "../PokemonListPage";

let history = createMemoryHistory();

const mocks = [
  {
    // error: new Error("An error occurred"),
    request: {
      query: testQuery,
      variables: { offset: 20 },
    },
    result: {
      data: {
        pokemons: {
          count: 1118,
          next: "https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20",
          previous: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
          status: true,
          message: "",
          results: [
            {
              url: "https://pokeapi.co/api/v2/pokemon/21/",
              name: "spearow",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
              id: 21,
            },
          ],
        },
      },
    },
  },
];

const renderWithContext = (component) => {
  return {
    ...render(
      <BrowserRouter>
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <Provider value={Context}>{component}</Provider>
          </MockedProvider>
        </Router>
      </BrowserRouter>
    ),
  };
};

it("should element be render", async () => {
  const { getByRole } = renderWithContext(<PokemonListPage />);

  await waitFor(() => {
    const pokemonNameElement = screen.getByText("spearow");
    const headingElement = screen.getByRole("heading", {
      name: "Pokemon List",
    });
    const pokemonCardElement = screen.getByTestId("pokemon-card");
    const pokemonPrevButton = screen.getByTestId("btn-prev");
    const pokemonNextButton = screen.getByTestId("btn-next");
    const pageElement = screen.getByTestId("page-flag");
    const buttonElement = screen.getAllByRole("button");

    fireEvent.click(pokemonCardElement);

    expect(pageElement).toBeInTheDocument();
    expect(pageElement.textContent).toBe("0");

    expect(buttonElement.length).toBe(2);
    expect(pokemonPrevButton).toBeTruthy();
    expect(pokemonNextButton).toBeTruthy();
    expect(history.location.pathname).toBe("/pokemondetail/spearow");
    expect(getByRole("heading", { value: /spearow/i })).toBeInTheDocument();

    expect(pokemonNameElement).toBeInTheDocument();
    expect(pokemonNameElement).toBeVisible();
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toBeVisible();
  });
});

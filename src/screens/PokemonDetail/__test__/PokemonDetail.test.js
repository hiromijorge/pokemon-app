import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Route, Router } from "react-router-dom";
import PokemonDetailPage, { testQuery } from "../PokemonDetailPage";
import Provider, { Context } from "../../../context/PokemonContext";
import { MockedProvider } from "@apollo/client/testing";

const mocks = [
  {
    // error: new Error("An error occurred"),
    request: {
      query: testQuery,
      variables: { name: "spearow" },
    },
    result: {
      data: {
        pokemon: {
          abilities: [
            {
              ability: {
                name: "keen-eye",
              },
            },
            {
              ability: {
                name: "sniper",
              },
            },
          ],
          base_experience: 52,
          height: 3,
          moves: [
            {
              move: {
                name: "razor-wind",
              },
            },
            {
              move: {
                name: "whirlwind",
              },
            },
            {
              move: {
                name: "fly",
              },
            },
            {
              move: {
                name: "fury-attack",
              },
            },
            {
              move: {
                name: "take-down",
              },
            },
            {
              move: {
                name: "double-edge",
              },
            },
            {
              move: {
                name: "leer",
              },
            },
            {
              move: {
                name: "growl",
              },
            },
            {
              move: {
                name: "peck",
              },
            },
            {
              move: {
                name: "drill-peck",
              },
            },
            {
              move: {
                name: "toxic",
              },
            },
            {
              move: {
                name: "agility",
              },
            },
            {
              move: {
                name: "quick-attack",
              },
            },
            {
              move: {
                name: "rage",
              },
            },
            {
              move: {
                name: "mimic",
              },
            },
            {
              move: {
                name: "double-team",
              },
            },
            {
              move: {
                name: "focus-energy",
              },
            },
            {
              move: {
                name: "bide",
              },
            },
            {
              move: {
                name: "mirror-move",
              },
            },
            {
              move: {
                name: "swift",
              },
            },
            {
              move: {
                name: "sky-attack",
              },
            },
            {
              move: {
                name: "rest",
              },
            },
            {
              move: {
                name: "tri-attack",
              },
            },
            {
              move: {
                name: "substitute",
              },
            },
            {
              move: {
                name: "thief",
              },
            },
            {
              move: {
                name: "snore",
              },
            },
            {
              move: {
                name: "curse",
              },
            },
            {
              move: {
                name: "protect",
              },
            },
            {
              move: {
                name: "scary-face",
              },
            },
            {
              move: {
                name: "feint-attack",
              },
            },
            {
              move: {
                name: "mud-slap",
              },
            },
            {
              move: {
                name: "detect",
              },
            },
            {
              move: {
                name: "endure",
              },
            },
            {
              move: {
                name: "false-swipe",
              },
            },
            {
              move: {
                name: "swagger",
              },
            },
            {
              move: {
                name: "steel-wing",
              },
            },
            {
              move: {
                name: "attract",
              },
            },
            {
              move: {
                name: "sleep-talk",
              },
            },
            {
              move: {
                name: "return",
              },
            },
            {
              move: {
                name: "frustration",
              },
            },
            {
              move: {
                name: "pursuit",
              },
            },
            {
              move: {
                name: "hidden-power",
              },
            },
            {
              move: {
                name: "twister",
              },
            },
            {
              move: {
                name: "rain-dance",
              },
            },
            {
              move: {
                name: "sunny-day",
              },
            },
            {
              move: {
                name: "uproar",
              },
            },
            {
              move: {
                name: "heat-wave",
              },
            },
            {
              move: {
                name: "facade",
              },
            },
            {
              move: {
                name: "secret-power",
              },
            },
            {
              move: {
                name: "feather-dance",
              },
            },
            {
              move: {
                name: "astonish",
              },
            },
            {
              move: {
                name: "air-cutter",
              },
            },
            {
              move: {
                name: "aerial-ace",
              },
            },
            {
              move: {
                name: "roost",
              },
            },
            {
              move: {
                name: "natural-gift",
              },
            },
            {
              move: {
                name: "pluck",
              },
            },
            {
              move: {
                name: "tailwind",
              },
            },
            {
              move: {
                name: "u-turn",
              },
            },
            {
              move: {
                name: "assurance",
              },
            },
            {
              move: {
                name: "defog",
              },
            },
            {
              move: {
                name: "captivate",
              },
            },
            {
              move: {
                name: "ominous-wind",
              },
            },
            {
              move: {
                name: "round",
              },
            },
            {
              move: {
                name: "echoed-voice",
              },
            },
            {
              move: {
                name: "work-up",
              },
            },
            {
              move: {
                name: "drill-run",
              },
            },
            {
              move: {
                name: "confide",
              },
            },
          ],
          sprites: {
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/21.png",
          },
          stats: [
            {
              base_stat: 40,
              effort: 0,
              stat: {
                name: "hp",
              },
            },
            {
              base_stat: 60,
              effort: 0,
              stat: {
                name: "attack",
              },
            },
            {
              base_stat: 30,
              effort: 0,
              stat: {
                name: "defense",
              },
            },
            {
              base_stat: 31,
              effort: 0,
              stat: {
                name: "special-attack",
              },
            },
            {
              base_stat: 31,
              effort: 0,
              stat: {
                name: "special-defense",
              },
            },
            {
              base_stat: 70,
              effort: 1,
              stat: {
                name: "speed",
              },
            },
          ],
          types: [
            {
              slot: 1,
              type: {
                name: "normal",
              },
            },
            {
              slot: 2,
              type: {
                name: "flying",
              },
            },
          ],
          weight: 20,
        },
      },
    },
  },
];

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
          <MockedProvider mocks={mocks} addTypename={false}>
            <Provider value={Context}>{components}</Provider>
          </MockedProvider>
        </Route>
      </Router>
    ),
  };
};

it("pokemon name should be the same with params in the reference", async () => {
  renderWithRouter(<PokemonDetailPage />, {
    route: "/pokemondetail/spearow",
    path: "/pokemondetail/:name",
  });

  await waitFor(() => {
    const pokemonNameElemet = screen.getByText("spearow");
    expect(pokemonNameElemet).toBeInTheDocument();
  });
});

it("should render all element", async () => {
  renderWithRouter(<PokemonDetailPage />, {
    route: "/pokemondetail/spearow",
    path: "/pokemondetail/:name",
  });

  await waitFor(() => {
    const buttonElement = screen.getByTestId("catch-btn");
    const buttonTextElement = screen.getByText("Catch Pokemon");
    const pokemonTypesElement = screen.getAllByTestId("pokemon-types");
    const pokemonMovesElement = screen.getAllByTestId("pokemon-moves");

    expect(pokemonTypesElement.length).toBe(2);
    expect(pokemonMovesElement.length).toBe(67);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
    expect(buttonTextElement).toBeInTheDocument();
    expect(buttonTextElement).toBeVisible();
  });
});

it("should change to next page when button clicked", async () => {
  const { history } = renderWithRouter(<PokemonDetailPage />, {
    route: "/pokemondetail/spearow",
    path: "/pokemondetail/:name",
  });

  await waitFor(() => {
    const buttonElement = screen.getByTestId("catch-btn");
    expect(buttonElement).toBeInTheDocument();

    const leftClick = { button: 0 };
    fireEvent.click(buttonElement);
    expect(history.location.pathname).toBe("/catchpokemon/spearow");
  });
});

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
            {
              url: "https://pokeapi.co/api/v2/pokemon/22/",
              name: "fearow",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
              id: 22,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/23/",
              name: "ekans",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
              id: 23,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/24/",
              name: "arbok",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
              id: 24,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/25/",
              name: "pikachu",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
              id: 25,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/26/",
              name: "raichu",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
              id: 26,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/27/",
              name: "sandshrew",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
              id: 27,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/28/",
              name: "sandslash",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
              id: 28,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/29/",
              name: "nidoran-f",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
              id: 29,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/30/",
              name: "nidorina",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
              id: 30,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/31/",
              name: "nidoqueen",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
              id: 31,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/32/",
              name: "nidoran-m",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
              id: 32,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/33/",
              name: "nidorino",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
              id: 33,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/34/",
              name: "nidoking",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
              id: 34,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/35/",
              name: "clefairy",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
              id: 35,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/36/",
              name: "clefable",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
              id: 36,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/37/",
              name: "vulpix",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
              id: 37,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/38/",
              name: "ninetales",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
              id: 38,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/39/",
              name: "jigglypuff",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
              id: 39,
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/40/",
              name: "wigglytuff",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
              id: 40,
            },
          ],
        },
      },
    },
  },
];

const renderWithContext = (component) => {
  // const cache = new InMemoryCache();
  // const link = createHttpLink({
  //   uri: "http://localhost:3000/pokemonlist",
  //   fetch: fetch,
  // });
  // const client = new ApolloClient({ cache, link });
  return {
    ...render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Provider value={Context}>{component}</Provider>
        </MockedProvider>
      </BrowserRouter>
    ),
  };
};

// const renderWithRouter = (component) => {
//   return {
//     ...render(<Router history={history}>{component}</Router>),
//   };
// };

it("should element be render", async () => {
  let root = renderWithContext(<PokemonListPage />);
  // const headingElement = screen.getByRole("heading", { name: /Pokemon List/i });
  const loadingElement = root.getByText("Loading products...");
  // expect(screen).toMatchSnapshot();

  await waitFor(() => {
    const pokemonNameElement = root.getByText("spearow");
    expect(loadingElement).not.toBeInTheDocument();
    // const error = root.getByText("Error!");
    // expect(error).toBeInTheDocument();
    expect(pokemonNameElement).toBeInTheDocument();
  });

  // expect(headingElement).toBeInTheDocument();
  // expect(headingElement).toBeVisible();
  // expect(headingElement).toBe("Pokemon List");
  // expect(loadingElement).toBeInTheDocument();
  // expect(pokemonNameElement).toBeInTheDocument();
});

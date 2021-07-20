/** @jsxRuntime classic */
/** @jsx jsx */
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import { Global } from "@emotion/react";

//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

//screens
import PokemonListPage from "./screens/PokemonList/PokemonListPage";
import PokemonDetailPage from "./screens/PokemonDetail/PokemonDetailPage";
import CatchPokemonPage from "./screens/CatchPokemon/CatchPokemonPage";
import MyPokemonListPage from "./screens/MyPokemonList/MyPokemonListPage";

import Provider from "./context/PokemonContext";

function App() {
  return (
    <Router>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }
        `}
      />
      <div className="App">
        <Navbar
          styles={css`
             {
              position: fixed;
            }
          `}
        />
        <div className="Content">
          <Switch>
            <Provider>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/pokemonlist">
                <PokemonListPage />
              </Route>
              <Route exact path="/pokemondetail/:name">
                <PokemonDetailPage />
              </Route>
              <Route exact path="/catchpokemon/:name">
                <CatchPokemonPage />
              </Route>
              <Route exact path="/mypokemonlist">
                <MyPokemonListPage />
              </Route>
            </Provider>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

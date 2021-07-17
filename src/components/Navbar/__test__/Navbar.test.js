import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Navbar from "../Navbar";

const history = createMemoryHistory();

const renderNavbar = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

const renderWithRouter = (component) => {
  return <Router history={history}>{component}</Router>;
};

describe("Navbar-Links", () => {
  it("should render the home page", () => {
    const { container, getByTestId } = render(renderWithRouter(<Navbar />));
    const navbar = getByTestId("navbar");
    const home = getByTestId("home-link");

    expect(container.innerHTML).toMatch("Home");
    expect(history.location.pathname).toBe("/");
    expect(navbar).toContainElement(home);
  });

  it("should render to pokemon list page", () => {
    const { container, getByTestId } = render(renderWithRouter(<Navbar />));
    const pokemonListLink = getByTestId("pokemonlist-link");
    const navbar = getByTestId("navbar");

    fireEvent.click(pokemonListLink);
    expect(history.location.pathname).toBe("/pokemonlist");
    // expect(container.innerHTML).toMatch("Pokemon List");
    expect(navbar).toContainElement(pokemonListLink);
  });
});

describe("Navbar Elements", () => {
  it("should link be shown to the page", () => {
    renderNavbar(<Navbar />);
    const linkHomeElement = screen.getByTestId("home-link");
    const linkPokemonListElement = screen.getByTestId("home-link");
    expect(linkHomeElement).toBeInTheDocument();
    expect(linkHomeElement).toBeVisible();
    expect(linkPokemonListElement).toBeInTheDocument();
    expect(linkPokemonListElement).toBeVisible();
  });

  it("should render image", () => {
    renderNavbar(<Navbar />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toBeVisible();
  });
});

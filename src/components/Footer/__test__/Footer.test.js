import { screen, render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";
import Footer from "../Footer";

let history = createMemoryHistory();

const renderFooter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

const renderWithRouter = (component) => {
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should render image", () => {
  renderFooter(<Footer />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toBeVisible();
});

it("should render my pokemon list page", () => {
  const { container, getByTestId } = renderWithRouter(<Footer />);
  const mypokemonlist = screen.getByTestId("mypokemonlist-link");

  fireEvent.click(mypokemonlist);

  expect(history.location.pathname).toBe("/mypokemonlist");
});

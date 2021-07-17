import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

it("should render text", () => {
  render(<MockHome />);
  const titleElement = screen.getByRole("heading");
  const paragraphElement = screen.getByText(
    /Let's explore the Pokemon world and catch all the Pokemon!/i
  );
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toBeVisible();
  expect(paragraphElement).toBeInTheDocument();
  expect(paragraphElement).toBeVisible();
});

it("should render image", () => {
  render(<MockHome />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toBeVisible();
});

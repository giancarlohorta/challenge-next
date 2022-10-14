import { render, screen } from "@testing-library/react";
import PokemonItem from "./PokemonItem";

describe("tests about pokemon item", () => {
  const number = 1;
  const name = "Pokemon Teste";
  test("should render the pokemon item", () => {
    render(<PokemonItem number={number} name={name} />);
    expect(screen.getByRole("link", { name: name })).toHaveAttribute(
      "href",
      "/1"
    );
    expect(screen.getByText(/Pokemon Teste/gi)).toBeInTheDocument();
    expect(screen.getByText(/#1/gi)).toBeInTheDocument();
  });
  test("should render the pokemon image", () => {
    render(<PokemonItem number={number} name={name} />);
    expect(screen.getByRole("img", { name: name })).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
  });
});

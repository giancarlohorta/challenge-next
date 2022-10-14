import { render, screen } from "@testing-library/react";
import PokemonsList from "./PokemonsList";
import mockData from "../../helper/mock.example";

describe("tests about pokemon list", () => {
  test("should render the pokemon items", () => {
    render(<PokemonsList dataPokemons={mockData.pokemons} />);
    expect(screen.getByText(/Pokemon 1/gi)).toBeInTheDocument();
    expect(screen.getByText(/#1/gi)).toBeInTheDocument();
    expect(screen.getByText(/Pokemon 2/gi)).toBeInTheDocument();
    expect(screen.getByText(/#2/gi)).toBeInTheDocument();
  });
});

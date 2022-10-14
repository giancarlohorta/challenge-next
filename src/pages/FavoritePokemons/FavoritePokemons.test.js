import { render, screen } from "@testing-library/react";
import FavoritePokemons from "./FavoritePokemons";
import mockData from "../../helper/mock.example";
import useLocalStorage from "../../hooks/useLocalStorage";

const mockedUseLocalStorage = useLocalStorage;

jest.mock("../../hooks/useLocalStorage");

describe("Favorites Page", () => {
  beforeEach(() => {
    mockedUseLocalStorage.mockReturnValue({
      hasOnLocalStorage: mockData.pokemons,
    });
  });
  test("should render elements", async () => {
    render(<FavoritePokemons />);
    expect(await screen.findByText(/Pokemon 1/gi)).toBeInTheDocument();
    expect(await screen.findByText(/Pokemon 2/gi)).toBeInTheDocument();
  });
});

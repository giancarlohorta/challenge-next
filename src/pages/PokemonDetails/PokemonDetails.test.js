import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockData from "../../helper/mock.example";
import PokemonDetails from "./PokemonDetails";

const mock = new MockAdapter(axios, { delayResponse: 0 });

const mockRequest = (httpStatusUser) => {
  mock
    .onGet(/pokemon/g)
    .reply(httpStatusUser, mockData.responseDataPokemonDetails);
};
describe("tests about pokemon details", () => {
  beforeEach(() => {
    mock.reset();
  });
  test("render name and weight", async () => {
    mockRequest(200);
    render(<PokemonDetails />);
    const name = await screen.findByText(/Bulbasaur/gi);
    expect(name).toBeInTheDocument();
    const weight = await screen.findByText(/6.9/gi);
    expect(weight).toBeInTheDocument();
    const height = await screen.findByText(/0.7/gi);
    expect(height).toBeInTheDocument();
  });
  test("click on favorite button", async () => {
    mockRequest(200);
    render(<PokemonDetails />);
    const button = await screen.findByRole("button", {
      name: "Favorite Button",
    });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("not-favorite")).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByTestId("favorite")).toBeInTheDocument();
  });
});

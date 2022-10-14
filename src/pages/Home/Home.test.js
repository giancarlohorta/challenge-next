import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockData from "../../helper/mock.example";
import Home from "./Home";

const mock = new MockAdapter(axios, { delayResponse: 0 });

const mockRequest = (httpStatusUser) => {
  mock.onGet(/offset=/g).reply(httpStatusUser, mockData.responseDataPokemons);
};
describe("tests about home", () => {
  beforeEach(() => {
    mock.reset();
  });
  test("render first name and second name", async () => {
    mockRequest(200);
    render(<Home />);
    const name1 = await screen.findByText(/Pokemon 1/gi);
    expect(name1).toBeInTheDocument();
    const name2 = screen.getByText(/Pokemon 2/gi);
    expect(name2).toBeInTheDocument();
  });
  test("render buttons pokemon", async () => {
    mockRequest(200);
    render(<Home />);
    const name1 = await screen.findByRole("link", { name: /Pokemon 1/gi });
    expect(name1).toBeInTheDocument();
    expect(name1).toHaveAttribute("href", "/1");
    const name2 = await screen.findByRole("link", { name: /Pokemon 2/gi });
    expect(name2).toBeInTheDocument();
    expect(name2).toHaveAttribute("href", "/2");
  });
  test("render error", async () => {
    mockRequest(400);
    render(<Home />);
    const title = await screen.findByText(/error loading pokemons/gi);
    expect(title).toBeInTheDocument();
    const button = await screen.findByRole("button", { name: /load again/gi });
    expect(button).toBeInTheDocument();
  });
  test("click reload", async () => {
    mockRequest(400);
    render(<Home />);
    const button = await screen.findByRole("button", { name: /load again/gi });
    userEvent.click(button);
    mock.reset();
    mockRequest(200);
    render(<Home />);
    const name1 = await screen.findByText(/Pokemon 1/gi);
    expect(name1).toBeInTheDocument();
  });
});

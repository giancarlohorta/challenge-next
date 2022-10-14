import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "./FavoriteButton";

describe("tests about favorite button", () => {
  test("should render the button", () => {
    render(<FavoriteButton />);
    expect(
      screen.getByRole("button", { name: "Favorite Button" })
    ).toBeInTheDocument();
  });
  test("should render the button with favorite is true", () => {
    const favorite = true;
    render(<FavoriteButton favorite={favorite} />);
    expect(screen.getByTestId("favorite")).toBeInTheDocument();
  });
  test("should render the button with favorite is false", () => {
    const favorite = false;
    render(<FavoriteButton favorite={favorite} />);
    expect(screen.getByTestId("not-favorite")).toBeInTheDocument();
  });
  test("click on button", () => {
    const toggle = jest.fn();
    render(<FavoriteButton toggleFavoritePokemon={toggle} />);
    const button = screen.getByRole("button", { name: "Favorite Button" });
    userEvent.click(button);
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});

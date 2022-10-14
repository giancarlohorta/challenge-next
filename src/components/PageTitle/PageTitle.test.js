import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("tests about title page", () => {
  test("should render the title on component", () => {
    render(<PageTitle>Title</PageTitle>);
    expect(screen.getByText(/Title/gi)).toBeInTheDocument();
  });
});

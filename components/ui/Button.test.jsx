import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom"; 

describe("Button component", () => {
  test("renders button with correct label", () => {
    render(<Button label="Click me" />);

    const button = screen.getByText("Click me");

    expect(button).toBeInTheDocument();
  });
});
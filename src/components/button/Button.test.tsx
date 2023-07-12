import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import Button from "./Button";

const buttonTestID = "button";

describe("Button", () => {
  // Test 1: should be able to render button
  it("should be able to render button", () => {
    const { getByTestId } = render(<Button>Click me!</Button>);
    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });

  // Test 2: should be able to render button with children prop
  it("should be able to render button with children prop", () => {
    const { getByTestId } = render(<Button>Click me!</Button>);
    expect(getByTestId(buttonTestID)).toHaveTextContent("Click me!");
  });

  // Test 3: should be able to fire onClick event
  it("should be able to fire onClick event", () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button onClick={handleClick}>Click me!</Button>
    );

    fireEvent.click(getByTestId(buttonTestID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 4: should have a default type of button
  it("should have a default type of button", () => {
    const { getByTestId } = render(<Button>Click me!</Button>);

    expect(getByTestId(buttonTestID)).toHaveStyle({
      width: "100%",
      maxWidth: "380px",
      height: "40px",
      backgroundColor: "#000",
      color: "#fff",
    });
  });
});

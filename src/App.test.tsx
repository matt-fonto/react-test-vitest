import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    const { getByText } = render(<App />);

    expect(getByText("Hey")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe(App, () => {
  it("Prints Hello World!", () => {
    render(<App />);
    expect(screen.getByText("Hello World!")).toBeVisible();
  });
});

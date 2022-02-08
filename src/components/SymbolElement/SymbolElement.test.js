import { render, screen } from "@testing-library/react";
import SymbolElement from "./SymbolElement";

beforeEach(() => {
  document.body.innerHTML = null;
});

describe("test style for game elements", () => {
  test("test style for scissors ", () => {
    render(<SymbolElement type="scissors" />);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('scissors-color')
  });
  test("test style for rock ", () => {
    render(<SymbolElement type="scissors" />);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('rock-color')
  });
  test("test style for paper ", () => {
    render(<SymbolElement type="scissors" />);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('paper-color')
  });
});

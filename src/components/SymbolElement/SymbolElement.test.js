import { render, screen } from "@testing-library/react";
import SymbolElement from "./SymbolElement";

beforeEach(() => {
  document.body.innerHTML = null;
});

describe("test style for game elements", () => {
  test("style for scissors", () => {
    render(<SymbolElement type="scissors"/>);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('scissors')
  });
  test("style for rock", () => {
    render(<SymbolElement type="rock" />);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('rock')
  });
  test("style for paper", () => {
    render(<SymbolElement type="paper" />);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('paper')
  });
  test("style for scissors when winning", () => {
    render(<SymbolElement type="scissors" win={true}/>);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('scissors--winner')
  });
  test("style for rock when winning", () => {
    render(<SymbolElement type="rock" win={true}/>);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('rock--winner')
  });
  test("style for paper when winning", () => {
    render(<SymbolElement type="paper" win={true}/>);
    const mySymbolContainer = screen.queryByTestId("symbol-container");
    expect(mySymbolContainer).toHaveClass('paper--winner')
  });
});

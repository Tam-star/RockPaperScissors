import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  document.body.innerHTML = null;
});

describe("test change between GameContainer and ChoiceContainer components", () => {
  test("test render choice container", () => {
    render(<App />);
    expect(screen.getByTestId("choice-container")).toBeInTheDocument();
  });
  test("test change for game container after user clicked on one symbol", () => {
    render(<App />);
    fireEvent.click(screen.getByTitle("paper"));
    expect(screen.queryByTestId("choice-container")).not.toBeInTheDocument();
    expect(screen.getByTestId("game-container")).toBeInTheDocument();
  });
  test('test change for choice container after user clicked on Play Again', () =>{
    render(<App />);
    fireEvent.click(screen.getByTitle("paper"));

    //wait 3 seconds, then click on play again, then assertions


    expect(screen.queryByTestId("game-container")).not.toBeInTheDocument();
    expect(screen.getByTestId("choice-container")).toBeInTheDocument();
  })
});


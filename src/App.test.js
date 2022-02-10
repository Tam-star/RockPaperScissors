import {
  fireEvent,
  render,
  screen,
  waitFor,
  configure,
} from "@testing-library/react";
import App from "./App";

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

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
  test("test change for choice container after user clicked on Play Again", async () => {
   
    //Modified the default timeout which was 1000
    configure({ asyncUtilTimeout: 5000 });
    render(<App />);
    fireEvent.click(screen.getByTitle("paper"));
    await waitFor(() => sleep(3000));
    fireEvent.click(screen.getByRole("button", { name: "PLAY AGAIN" }));

    expect(screen.queryByTestId("game-container")).not.toBeInTheDocument();
    expect(screen.getByTestId("choice-container")).toBeInTheDocument();
    
    //Set back the default timeout
    configure({ asyncUtilTimeout: 1000 });
  });
});

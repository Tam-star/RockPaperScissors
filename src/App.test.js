import {
  fireEvent,
  render,
  screen,
  waitFor,
  configure,
} from "@testing-library/react";
import App from "./App";
import { TIME_BEFORE_SHOWING_RESULT } from "./config";

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

beforeEach(() => {
  document.body.innerHTML = null;
});

describe("tests change between GameContainer and ChoiceContainer components", () => {
  test("render choice container", () => {
    render(<App />);
    expect(screen.getByTestId("choice-container")).toBeInTheDocument();
  });
  test("change for game container after user clicked on one symbol", () => {
    render(<App />);
    fireEvent.click(screen.getByTitle("paper"));
    expect(screen.queryByTestId("choice-container")).not.toBeInTheDocument();
    expect(screen.getByTestId("game-container")).toBeInTheDocument();
  });
  test("change for choice container after user clicked on Play Again", async () => {
    //Modified the default timeout which was 1000
    configure({ asyncUtilTimeout: TIME_BEFORE_SHOWING_RESULT + 1000 });
    render(<App />);
    fireEvent.click(screen.getByTitle("paper"));
    await waitFor(() => sleep(TIME_BEFORE_SHOWING_RESULT));
    fireEvent.click(screen.getByRole("button", { name: "PLAY AGAIN" }));

    expect(screen.queryByTestId("game-container")).not.toBeInTheDocument();
    expect(screen.getByTestId("choice-container")).toBeInTheDocument();

    //Set back the default timeout
    configure({ asyncUtilTimeout: 1000 });
  });
});

test("appearance and disappearance of rules modal when clicking on rules button", () => {
  render(<App />);
  const showRules = screen.getByRole("button", { name: /RULES/i });
  fireEvent.click(showRules);
  console.log(document.body.innerHTML);

  expect(screen.getByTestId("rules-modal")).toBeInTheDocument();
  const closeModal = screen.getByRole("button", { name: /close rules/i });
  fireEvent.click(closeModal);
  expect(screen.queryByTestId("rules-modal")).not.toBeInTheDocument();
});

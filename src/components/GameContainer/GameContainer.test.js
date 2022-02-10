import { render, screen, waitFor, configure } from "@testing-library/react";
import GameContainer from "./GameContainer";
import { TIME_BEFORE_SHOWING_RESULT } from "../../config";

//Modified the default timeout which was 1000
configure({ asyncUtilTimeout: TIME_BEFORE_SHOWING_RESULT + 1000 });

beforeEach(() => {
  document.body.innerHTML = null;
});

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

test("appearance of PlayAgainComponent after 2 seconds wait", async () => {
  render(<GameContainer userPick="paper" housePick="scissors" />);
  await waitFor(() => sleep(TIME_BEFORE_SHOWING_RESULT));
  expect(screen.getByTestId("play-again-container")).toBeInTheDocument();
});

describe("test final sentence", () => {
  test("final sentence when house wins", async () => {
    render(<GameContainer userPick="paper" housePick="scissors" />);
    await waitFor(() => sleep(TIME_BEFORE_SHOWING_RESULT));
    expect(screen.getByTestId("final-sentence")).toHaveTextContent("YOU LOSE");
  });
  test("final sentence when user wins", async () => {
    render(<GameContainer userPick="rock" housePick="scissors" />);
    await waitFor(() => sleep(TIME_BEFORE_SHOWING_RESULT));
    expect(screen.getByTestId("final-sentence")).toHaveTextContent("YOU WIN");
  });
  test("final sentence when it is a tie", async () => {
    render(<GameContainer userPick="paper" housePick="paper" />);
    await waitFor(() => sleep(TIME_BEFORE_SHOWING_RESULT));
    expect(screen.getByTestId("final-sentence")).toHaveTextContent(
      "IT'S A TIE"
    );
  });
});

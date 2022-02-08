import { render, screen, waitFor, configure } from "@testing-library/react";
import GameContainer from "./GameContainer";

//Modified the default timeout which was 1000
configure({ asyncUtilTimeout: 5000 });

beforeEach(() => {
  document.body.innerHTML = null;
});

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

test("test appearance of PlayAgainComponent after 3 seconds wait", async () => {
  render(<GameContainer />);
  await waitFor(() => sleep(3000));
  expect(screen.getByTestId("play-again-container")).toBeInTheDocument();
});

test("test appearance of the two symbols", async () => {
  render(<GameContainer userPick="paper" housePick="scissors" />);
  expect(screen.getByTestId("user-pick")).toHaveClass("paper");
  expect(screen.getByTestId("house-pick")).toHaveClass("scissors");
});

describe("test final sentence", () => {
  test("test final sentence when house wins", async () => {
    render(<GameContainer userPick="paper" housePick="scissors" />);
    expect(screen.getByTestId("final-sentence")).toHaveTextContent("YOU LOSE");
  });
  test("test final sentence when user wins", async () => {
    render(<GameContainer userPick="rock" housePick="scissors" />);
    expect(screen.getByTestId("final-sentence")).toHaveTextContent("YOU WIN");
  });
  test("test final sentence when it is a tie", async () => {
    render(<GameContainer userPick="paper" housePick="paper" />);
    expect(screen.getByTestId("final-sentence")).toHaveTextContent(
      "IT'S A TIE"
    );
  });
});



import { render, screen } from "@testing-library/react";
import ScoreElement from "./ScoreElement";

beforeEach(() => {
  document.body.innerHTML = null;
});

describe("test score appearance", () => {
  test("test when number is passed through prop", () => {
    render(<ScoreElement score={5} />);
    expect(screen.queryByTestId("score")).toHaveTextContent("12");
  });
  //We want an X to appear instead of the score in case of error
  test("test when no prop is passed", () => {
    render(<ScoreElement />);
    expect(screen.queryByTestId("score")).toHaveTextContent("X");
  });
  test("test when no prop is null", () => {
    render(<ScoreElement score={null} />);
    expect(screen.queryByTestId("score")).toHaveTextContent("X");
  });
});

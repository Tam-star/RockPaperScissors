import { getHouseSymbol, play, getScore, setNewScore, declareWinner } from "./helper";
import { STORAGE } from "../config";

test("getHouseSymbol to return either rock, paper or scissors", () => {
  for (let i = 0; i < 10; i++) {
    const symbols = ["rock", "paper", "scissors"];
    expect(getHouseSymbol(symbols)).toMatch(/(rock|paper|scissors)/);
  }
});

//play function will return  :
//-1 if house won
//0 if same symbol
//1 if user won
//play(housePick, userPick)
describe("test play function", () => {
  //Cases user win
  test("when house picked scissors and user picked rock, user should win", () => {
    expect(play("scissors", "rock")).toBe(1);
  });
  test("when house picked paper and user picked scissors, user should win", () => {
    expect(play("paper", "scissors")).toBe(1);
  });
  test("when house picked rock and user picked paper, user should win", () => {
    expect(play("rock", "paper")).toBe(1);
  });
  test("when house picked lizard and user picked rock, user should win", () => {
    expect(play("lizard", "rock")).toBe(1);
  });
  test("when house picked spock and user picked lizard, user should win", () => {
    expect(play("spock", "lizard")).toBe(1);
  });
  test("when house picked scissors and user picked spock, user should win", () => {
    expect(play("scissors", "spock")).toBe(1);
  });
  test("when house picked lizard and user picked scissors, user should win", () => {
    expect(play("lizard", "scissors")).toBe(1);
  });
  test("when house picked rock and user picked spock, user should win", () => {
    expect(play("rock", "spock")).toBe(1);
  });
  test("when house picked paper and user picked lizard, user should win", () => {
    expect(play("paper", "lizard")).toBe(1);
  });
  test("when house picked spock and user picked paper, user should win", () => {
    expect(play("spock", "paper")).toBe(1);
  });
  //Cases house win
  test("when house picked scissors and user picked paper, user should lose", () => {
    expect(play("scissors", "paper")).toBe(-1);
  });
  test("when house picked paper and user picked rock, user should lose", () => {
    expect(play("paper", "rock")).toBe(-1);
  });
  test("when house picked rock and user picked scissors, user should lose", () => {
    expect(play("rock", "scissors")).toBe(-1);
  });
  test("when house picked rock and user picked lizard, user should lose", () => {
    expect(play("rock", "lizard")).toBe(-1);
  });
  test("when house picked lizard and user picked spock, user should lose", () => {
    expect(play("lizard", "spock")).toBe(-1);
  });
  test("when house picked spock and user picked scissors, user should lose", () => {
    expect(play("spock", "scissors")).toBe(-1);
  });
  test("when house picked scissors and user picked lizard, user should lose", () => {
    expect(play("scissors", "lizard")).toBe(-1);
  });
  test("when house picked spock and user picked rock, user should lose", () => {
    expect(play("spock", "rock")).toBe(-1);
  });
  test("when house picked lizard and user picked paper, user should lose", () => {
    expect(play("lizard", "paper")).toBe(-1);
  });
  test("when house picked paper and user picked spock, user should lose", () => {
    expect(play("paper", "spock")).toBe(-1);
  });
  //Cases no one win
  test("when both picked scissors, it's a tie", () => {
    expect(play("scissors", "scissors")).toBe(0);
  });
  test("when both picked paper, it's a tie", () => {
    expect(play("paper", "paper")).toBe(0);
  });
  test("when both picked rock, it's a tie", () => {
    expect(play("rock", "rock")).toBe(0);
  });
  test("when both picked lizard, it's a tie", () => {
    expect(play("lizard", "lizard")).toBe(0);
  });
  test("when both picked spock, it's a tie", () => {
    expect(play("spock", "spock")).toBe(0);
  });
});

describe("tests getScore", () => {
  afterEach(() => {
    sessionStorage.clear();
  });
  test("getting score from session storage", () => {
    sessionStorage.setItem(STORAGE, 3);
    const score = getScore();
    expect(score).toBe(3);
  });
  test("score should be 0 when there is no score stored", () => {
    const score = getScore();
    expect(score).toBe(0);
  });
});

//setNewScore(gameResult)
describe("test setNewScore", () => {
  afterEach(() => {
    sessionStorage.clear();
  });
  test("setNewScore in case it is a tie", () => {
    sessionStorage.setItem(STORAGE, 12);
    setNewScore(0);
    expect(sessionStorage.getItem(STORAGE)).toBe("12");
  });
  test("setNewScore in case it house win", () => {
    sessionStorage.setItem(STORAGE, 12);
    setNewScore(-1);
    expect(sessionStorage.getItem(STORAGE)).toBe("11");
  });
  test("setNewScore in case user win", () => {
    sessionStorage.setItem(STORAGE, 12);
    setNewScore(1);
    expect(sessionStorage.getItem(STORAGE)).toBe("13");
  });
  //Score cannot be below 0
  test("setNewScore in case house wins and user score was 0", () => {
    sessionStorage.setItem(STORAGE, 0);
    setNewScore(-1);
    expect(sessionStorage.getItem(STORAGE)).toBe("0");
  });
  //Maximum score : 999
  test("setNewScore in case user wins and user score was 999", () => {
    sessionStorage.setItem(STORAGE, 999);
    setNewScore(1);
    expect(sessionStorage.getItem(STORAGE)).toBe("999");
  });
});

//declareWinner(housePick, userPick)
describe("tests declareWinner function", () => {
  test("in case house wins", () => {
    const finalSentence = declareWinner(-1)
    expect(finalSentence).toBe("YOU LOSE")
  });
  test("in case user wins", () => {
    const finalSentence = declareWinner(1)
    expect(finalSentence).toBe("YOU WIN")
  });
  test("in case it's a tie", () => {
    const finalSentence = declareWinner(0)
    expect(finalSentence).toBe("IT'S A TIE")
  });
});

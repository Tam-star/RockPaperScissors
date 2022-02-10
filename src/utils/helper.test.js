import { getHouseSymbol, play, getScore, setNewScore } from "./helper";
import { STORAGE } from "../config";

test("test getHouseSymbol to return either rock, paper or scissors", () => {
  expect(getHouseSymbol()).toMatch(/(rock|paper|scissors)/);
  expect(getHouseSymbol()).toMatch(/(rock|paper|scissors)/);
  expect(getHouseSymbol()).toMatch(/(rock|paper|scissors)/);
});

//play function will return  :
//-1 if house won
//0 if same symbol
//1 if user won
//play(housePick, userPick)
describe("test play function", () => {
  //Cases user win
  test("test when house picked scissors and user picked rock, user should win", () => {
    expect(play("scissors", "rock")).toBe(1);
  });
  test("test when house picked paper and user picked scissors, user should win", () => {
    expect(play("paper", "scissors")).toBe(1);
  });
  test("test when house picked rock and user picked paper, user should win", () => {
    expect(play("rock", "paper")).toBe(1);
  });
  //Cases house win
  test("test when house picked scissors and user picked paper, user should lose", () => {
    expect(play("scissors", "paper")).toBe(-1);
  });
  test("test when house picked paper and user picked rock, user should lose", () => {
    expect(play("paper", "rock")).toBe(-1);
  });
  test("test when house picked rock and user picked scissors, user should lose", () => {
    expect(play("rock", "scissors")).toBe(-1);
  });
  //Cases no one win
  test("test when both picked scissors, it's a tie", () => {
    expect(play("scissors", "scissors")).toBe(0);
  });
  test("test when both picked paper, it's a tie", () => {
    expect(play("paper", "paper")).toBe(0);
  });
  test("test when both picked rock, it's a tie", () => {
    expect(play("rock", "rock")).toBe(0);
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
  test("test setNewScore in case it is a tie", () => {
    sessionStorage.setItem(STORAGE, 12);
    setNewScore(0);
    expect(sessionStorage.getItem(STORAGE)).toBe('12');
  });
  test("test setNewScore in case it house win", () => {
    sessionStorage.setItem(STORAGE, 12);
    setNewScore(-1);
    expect(sessionStorage.getItem(STORAGE)).toBe('11');
  });
  test("setNewScore in case user win", () => {
    sessionStorage.setItem(STORAGE, 12);
    setNewScore(1);
    expect(sessionStorage.getItem(STORAGE)).toBe('13');
  });
  //Score cannot be below 0
  test("setNewScore in case house wins and user score was 0", () => {
    sessionStorage.setItem(STORAGE, 0);
    setNewScore(-1);
    expect(sessionStorage.getItem(STORAGE)).toBe('0');
  });
  //Maximum score : 999
  test("setNewScore in case user wins and user score was 999", () => {
    sessionStorage.setItem(STORAGE, 999);
    setNewScore(1);
    expect(sessionStorage.getItem(STORAGE)).toBe('999');
  });
});

import { STORAGE } from "../config";

// export function getHouseSymbol() {
//   const symbols = ["rock", "paper", "scissors"];
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

export function getHouseSymbol(symbolArray) {
  return symbolArray[Math.floor(Math.random() * symbolArray.length)];
}

// export function getBonusHouseSymbol() {
//   const symbols = ["rock", "paper", "scissors", "lizard", "spock"];
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

export function getScore() {
  if (sessionStorage.getItem(STORAGE)) {
    return parseInt(sessionStorage.getItem(STORAGE));
  } else {
    return 0;
  }
}

//play function will return  :
//-1 if house won
//0 if same symbol
//1 if user won
export function play(housePick, userPick) {
  switch (housePick) {
    case "scissors":
      switch (userPick) {
        case "rock":
          return 1;
        case "scissors":
          return 0;
        case "paper":
          return -1;
        case "lizard":
          return -1;
        case "spock":
          return 1;
        default:
          throw Error("userPick not valid");
      }
    case "paper":
      switch (userPick) {
        case "scissors":
          return 1;
        case "paper":
          return 0;
        case "rock":
          return -1;
        case "lizard":
          return 1;
        case "spock":
          return -1;
        default:
          throw Error("userPick not valid");
      }
    case "rock":
      switch (userPick) {
        case "paper":
          return 1;
        case "rock":
          return 0;
        case "scissors":
          return -1;
        case "lizard":
          return -1;
        case "spock":
          return 1;
        default:
          throw Error("userPick not valid");
      }
      case "lizard":
      switch (userPick) {
        case "paper":
          return -1;
        case "rock":
          return 1;
        case "scissors":
          return 1;
        case "lizard":
          return 0;
        case "spock":
          return -1;
        default:
          throw Error("userPick not valid");
      }
      case "spock":
      switch (userPick) {
        case "paper":
          return 1;
        case "rock":
          return -1;
        case "scissors":
          return -1;
        case "lizard":
          return 1;
        case "spock":
          return 0;
        default:
          throw Error("userPick not valid");
      }
    default:
      throw Error("housePick not valid");
  }
}

export function setNewScore(gameResult) {
  const previousScore = getScore();
  if (
    !(previousScore === 0 && gameResult === -1) &&
    !(previousScore === 999 && gameResult === 1)
  ) {
    const newScore = previousScore + gameResult;
    sessionStorage.setItem(STORAGE, newScore);
  }
}

export function declareWinner(gameResult) {
  // const result = play(housePick, userPick)
  switch (gameResult) {
    case 1:
      return "YOU WIN";
    case 0:
      return "IT'S A TIE";
    case -1:
      return "YOU LOSE";
    default:
      throw Error("something is wrong");
  }
}

import React from "react";

export const games = {
    original : {
        choiceImage : `${process.env.PUBLIC_URL}/images/bg-triangle.svg`,
        logoAlt  : 'Rock Paper Scissors Game',
        logoUrl : `${process.env.PUBLIC_URL}/images/logo.svg`, 
        rulesImage : `${process.env.PUBLIC_URL}/images/image-rules.svg`,
        symbols : ["rock", "paper", "scissors"]
    },
    bonus : {
        choiceImage : `${process.env.PUBLIC_URL}/images/bg-pentagon.svg`,
        logoAlt  : 'Rock Paper Scissors Lizard Spock Game',
        logoUrl : `${process.env.PUBLIC_URL}/images/logo-bonus.svg`,
        rulesImage : `${process.env.PUBLIC_URL}/images/image-rules-bonus.svg`,
        symbols : ["rock", "paper", "scissors", "lizard", "spock"]
    }
}


export const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [game, setGame] = React.useState(games.original);

  const value = [game, setGame];

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
};

export function useGame() {
  return React.useContext(GameContext);
}
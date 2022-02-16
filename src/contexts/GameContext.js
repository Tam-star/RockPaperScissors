import React from "react";

export const games = {
    original : {
        logoAlt  : 'Rock Paper Scissors Game',
        logoUrl : `${process.env.PUBLIC_URL}/images/logo.svg`, 
        choiceImage : `${process.env.PUBLIC_URL}/images/bg-triangle.svg`
    },
    bonus : {
        logoAlt  : 'Rock Paper Scissors Lizard Spock Game',
        logoUrl : `${process.env.PUBLIC_URL}/images/logo-bonus.svg`,
        choiceImage : `${process.env.PUBLIC_URL}/images/bg-pentagon.svg`
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
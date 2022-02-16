import "./App.scss";
import Header from "./components/Header/Header";
import ChoiceContainer from "./components/ChoiceContainer/ChoiceContainer";
import RulesButton from "./components/RulesButton/RulesButton";
import React from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import { getHouseSymbol, getScore } from "./utils/helper";
import RulesModal from "./components/RulesModal/RulesModal";
import GameSwitchElement from "./components/GameSwitchElement/GameSwitchElement";
import { GameProvider, useGame } from "./contexts/GameContext";

function App() {
  const [game] = useGame();
  const [userChose, setUserChose] = React.useState(false);
  const [userPick, setUserPick] = React.useState("");
  const [housePick, setHousePick] = React.useState("");
  const [showRules, setShowRules] = React.useState(false);
  const [score, setScore] = React.useState(getScore());

  const handleShowRules = (e) => {
    e.preventDefault();
    setShowRules(!showRules);
  };

  const updateScore = () => {
    setScore(getScore());
  };

  const handleChangeContainer = (e) => {
    e.preventDefault();
    setUserPick(e.currentTarget.dataset.symbol);
    setHousePick(getHouseSymbol(game.symbols));
    setUserChose(!userChose);
  };

  return (
    
      <div className="App">
        <Header score={score} />
        {userChose ? (
          <GameContainer
            userPick={userPick}
            housePick={housePick}
            changeContainer={handleChangeContainer}
            updateScore={updateScore}
          />
        ) : (
          <ChoiceContainer changeContainer={handleChangeContainer} />
        )}
        {showRules ? <RulesModal closeModal={handleShowRules} /> : ""}
        <RulesButton handleShowRules={handleShowRules} />
        <GameSwitchElement />
      </div>
  );
}

export default App;

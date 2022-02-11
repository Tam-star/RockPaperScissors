import "./App.scss";
import Header from "./components/Header/Header";
import ChoiceContainer from "./components/ChoiceContainer/ChoiceContainer";
import RulesButton from "./components/RulesButton/RulesButton";
import React from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import { getHouseSymbol } from "./utils/helper";
import RulesModal from "./components/RulesModal/RulesModal";

function App() {
  const [userChose, setUserChose] = React.useState(false);
  const [userPick, setUserPick] = React.useState("");
  const [housePick, setHousePick] = React.useState("");
  const [showRules, setShowRules] = React.useState(false);

  const handleShowRules = (e) => {
    e.preventDefault();
    setShowRules(!showRules);
  };

  const handleChangeContainer = (e) => {
    e.preventDefault();
    setUserPick(e.currentTarget.dataset.symbol);
    setHousePick(getHouseSymbol());
    setUserChose(!userChose);
  };

  return (
    <div className="App">
      <Header />
      {userChose ? (
        <GameContainer
          userPick={userPick}
          housePick={housePick}
          changeContainer={handleChangeContainer}
        />
      ) : (
        <ChoiceContainer changeContainer={handleChangeContainer} />
      )}
      {showRules ? <RulesModal closeModal={handleShowRules} /> : ""}
      <RulesButton handleShowRules={handleShowRules} />
    </div>
  );
}

export default App;

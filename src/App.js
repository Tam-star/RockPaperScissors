import "./App.css";
import Header from "./components/Header/Header";
import ChoiceContainer from "./components/ChoiceContainer/ChoiceContainer";
import RulesButton from "./components/RulesButton/RulesButton";
import React from "react";
import GameContainer from "./components/GameContainer/GameContainer";

function App() {
  const [userChose, setUserChose] = React.useState(false);
  const [userPick, setUserPick] = React.useState("");

  const handleChangeContainer = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.dataset.symbol);
    setUserPick(e.currentTarget.dataset.symbol);
    setUserChose(!userChose);
  };

  return (
    <div className="App">
      <Header />
      {userChose ? (
        <GameContainer
          userPick={userPick}
          changeContainer={handleChangeContainer}
        />
      ) : (
        <ChoiceContainer changeContainer={handleChangeContainer} />
      )}
      <RulesButton />
    </div>
  );
}

export default App;

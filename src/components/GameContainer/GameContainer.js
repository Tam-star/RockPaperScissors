import React from "react";
import SymbolElement from "../SymbolElement/SymbolElement";
import "./GameContainer.scss";

function GameContainer({ userPick, housePick, changeContainer }) {
  const [showWinner, setShowWinner] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowWinner(true);
    }, 3000);
  }, []);

  //UseEffect to wait 3 seconds before rendering 'You win' or 'You lose' div
  return (
    <div data-testid="game-container">
      <SymbolElement type={userPick} />
      {showWinner ? (
        <div data-testid="play-again-container">
          <p>YOU </p>
          <button onClick={changeContainer}>PLAY AGAIN</button>
        </div>
      ) : (
        ""
      )}
      <SymbolElement type={housePick} />
    </div>
  );
}

export default GameContainer;

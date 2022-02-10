import React from "react";
import { declareWinner } from "../../utils/helper";
import SymbolElement from "../SymbolElement/SymbolElement";
import { TIME_BEFORE_SHOWING_RESULT } from "../../config";
import "./GameContainer.scss";

function GameContainer({ userPick, housePick, changeContainer }) {
  const [showWinner, setShowWinner] = React.useState(false);
  const finalSentence = declareWinner(housePick, userPick);

  React.useEffect(() => {
    let timer2 = setTimeout(
      () => setShowWinner(true),
      TIME_BEFORE_SHOWING_RESULT
    );
    return () => {
      clearTimeout(timer2);
    };
  }, []);

  //UseEffect to wait 3 seconds before rendering 'You win' or 'You lose' div
  return (
    <div className="game-container" data-testid="game-container">
      <div className="pick-container">
        <h2>YOU PICKED</h2>
        <SymbolElement type={userPick} />
      </div>
      {showWinner ? (
        <div
          className="play-again-container"
          data-testid="play-again-container"
        >
          <h1 data-testid="final-sentence">{finalSentence}</h1>
          <button onClick={changeContainer}>PLAY AGAIN</button>
        </div>
      ) : (
        ""
      )}
      <div className="pick-container">
        <h2>THE HOUSE PICKED</h2>
        <SymbolElement type={housePick} />
      </div>
    </div>
  );
}

export default GameContainer;

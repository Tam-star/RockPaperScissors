import React from "react";
import { declareWinner, play, setNewScore } from "../../utils/helper";
import SymbolElement from "../SymbolElement/SymbolElement";
import {
  TIME_BEFORE_SHOWING_HOUSEPICK,
  TIME_BEFORE_SHOWING_RESULT,
} from "../../config";
import "./GameContainer.scss";

function GameContainer({ userPick, housePick, changeContainer, updateScore }) {
  const [showWinner, setShowWinner] = React.useState(false);
  const [revealHousePick, setReavealHousePick] = React.useState(false);
  const gameResult = play(housePick, userPick)
  const finalSentence = declareWinner(gameResult);

  React.useEffect(() => {
    let timer1 = setTimeout(
      () => setReavealHousePick(true),
      TIME_BEFORE_SHOWING_HOUSEPICK
    );
    let timer2 = setTimeout(
      () => {
        setShowWinner(true)
        setNewScore(gameResult)
        updateScore()
      },
      TIME_BEFORE_SHOWING_RESULT
    );
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameResult]);

  //UseEffect to wait 3 seconds before rendering 'You win' or 'You lose' div
  return (
    <div className="game-container" data-testid="game-container">
      <div className="pick-container">
        <h2>YOU PICKED</h2>
        <SymbolElement type={userPick} win={gameResult===1 && showWinner} />
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
        <SymbolElement type={housePick} hidden={!revealHousePick} win={gameResult===-1 && showWinner} />
      </div>
    </div>
  );
}

export default GameContainer;

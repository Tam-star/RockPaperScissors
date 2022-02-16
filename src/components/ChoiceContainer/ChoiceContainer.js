import React from "react";
import { games, useGame } from "../../contexts/GameContext";
import SymbolElement from "../SymbolElement/SymbolElement";
import "./ChoiceContainer.scss";

function ChoiceContainer({ changeContainer }) {
  const [game] = useGame();

  return (
    <div className="choice-container" data-testid="choice-container">
      <img className="choice-container__image" alt="" src={game.choiceImage} />
      {game === games.original ? (
        <>
          <div className="choice-container--original__top-left">
            <SymbolElement
              type="paper"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
          <div className="choice-container--original__top-right">
            <SymbolElement
              type="scissors"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
          <div className="choice-container--original__bottom">
            <SymbolElement
              type="rock"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
        </>
      ) : (
        <>
          <div className="choice-container--bonus__top">
            <SymbolElement
              type="paper"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
          <div className="choice-container--bonus__top-right">
            <SymbolElement
              type="scissors"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
          <div className="choice-container--bonus__bottom-right">
            <SymbolElement
              type="rock"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
          <div className="choice-container--bonus__bottom-left">
            <SymbolElement
              type="lizard"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
          <div className="choice-container--bonus__top-left">
            <SymbolElement
              type="spock"
              status="choice"
              changeContainer={changeContainer}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ChoiceContainer;

import React from "react";
import SymbolElement from "../SymbolElement/SymbolElement";
import "./GameContainer.scss";

function GameContainer() {

  //UseEffect to wait 3 seconds before rendering 'You win' or 'You lose' div
  return (
    <div>
        <SymbolElement type='rock' />
        <div>
          <p>YOU </p>
          <button>PLAY AGAIN</button>
        </div>
        <SymbolElement type='scissors'/>
    </div>
  );
}

export default GameContainer;

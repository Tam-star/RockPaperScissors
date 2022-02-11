import React from "react";
import SymbolElement from "../SymbolElement/SymbolElement";
import "./ChoiceContainer.scss";

function ChoiceContainer({ changeContainer }) {
  return (
    <div className="choice-container" data-testid="choice-container">
      <img
        className="choice-container__image"
        alt=""
        src={`/images/bg-triangle.svg`}
      />
      <div className="choice-container__top-left">
        <SymbolElement
          type="paper"
          status="choice"
          changeContainer={changeContainer}
        />
      </div>
      <div className="choice-container__top-right">
        <SymbolElement
          type="scissors"
          status="choice"
          changeContainer={changeContainer}
        />
      </div>
      <div className="choice-container__bottom">
        <SymbolElement
          type="rock"
          status="choice"
          changeContainer={changeContainer}
        />
      </div>
    </div>
  );
}

export default ChoiceContainer;

import React from "react";
import SymbolElement from "../SymbolElement/SymbolElement";
import "./ChoiceContainer.scss";

function ChoiceContainer() {
  return (
    <div className="choice-container">
      <img
        className="choice-container__image"
        alt=""
        src={`/images/bg-triangle.svg`}
      />
      <div className="choice-container__top-left">
        <SymbolElement type="paper" small={true} />
      </div>
      <div className="choice-container__top-right">
        <SymbolElement type="scissors" small={true} />
      </div>
      <div className="choice-container__bottom">
        <SymbolElement type="rock" small={true} />
      </div>
    </div>
  );
}

export default ChoiceContainer;

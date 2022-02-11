import React from "react";
import "./RulesButton.scss";

function RulesButton({handleShowRules}) {
  return (
    <button onClick={handleShowRules} className="rules-button">RULES</button>
  );
}

export default RulesButton;

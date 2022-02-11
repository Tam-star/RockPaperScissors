import React from "react";
import "./ScoreElement.scss";

function ScoreElement({score}) {
  return (
    <div className="score-container">
      <h2 className="score-container__title">SCORE</h2>
      <p className="score-container__number" data-testid="score">{typeof score ==="number" ? score : 'X'}</p>
    </div>
  );
}

export default ScoreElement;

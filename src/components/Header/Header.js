import React from "react";
import ScoreElement from "../ScoreElement/ScoreElement";
import "./Header.scss";

function Header({score}) {
  return (
    <header className="app-header">
    <img alt="Rock Paper Scissors Game" src={`/images/logo.svg`} />
      <ScoreElement score={score}/>
    </header>
  );
}

export default Header;

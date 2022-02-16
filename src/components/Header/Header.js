import React from "react";
import { useGame } from "../../contexts/GameContext";
import ScoreElement from "../ScoreElement/ScoreElement";
import "./Header.scss";

function Header({ score }) {
  const [game] = useGame();
  return (
    <header className="app-header">
      <img
        alt={game.logoAlt}
        src={game.logoUrl}
      />
      <ScoreElement score={score} />
    </header>
  );
}

export default Header;

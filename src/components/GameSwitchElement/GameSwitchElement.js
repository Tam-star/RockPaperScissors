import React from "react";
import Switch from "react-switch";
import "./GameSwitchElement.scss";
import { useGame, games } from "../../contexts/GameContext";

const GameSwitchElement = () => {
  const [game, setGame] = useGame();
  const [checked, setChecked] = React.useState(game === games.bonus);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    if (checked) {
      setGame(games.original);
    } else {
      setGame(games.bonus);
    }
  };
  return (
    <div className="switch-container">
      <label>Original</label>
      <Switch
        checked={checked}
        onChange={handleChange}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        offColor="#ADD279"
        offHandleColor="#5CA815"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={48}
      />

      <label>Bonus</label>
    </div>
  );
};

export default GameSwitchElement;

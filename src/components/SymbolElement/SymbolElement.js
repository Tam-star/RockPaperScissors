import React from "react";
import "./SymbolElement.css";

function SymbolElement({type}) {
  return (
    <div className={`symbol-container ${type}-color`} data-testid="symbol-container">
      <img alt="" src={`/images/icon-${type}.svg`} />
    </div>
  );
}

export default SymbolElement;

import React from "react";
import "./SymbolElement.scss"

function SymbolElement({type}) {
  return (
    <div className={`symbol-container ${type} ${type}--winning-element`} data-testid="symbol-container">
      <img alt="" src={`/images/icon-${type}.svg`} />
    </div>
  );
}

export default SymbolElement;

import React from "react";
import "./SymbolElement.scss"

function SymbolElement({type, small=false}) {
  return (
    <div className={`symbol-container${small? '--small':''} ${type}`} data-testid="symbol-container">
      <img className={`symbol-container${small?'--small':''}__image`} alt="" src={`/images/icon-${type}.svg`} />
    </div>
  );
}

export default SymbolElement;

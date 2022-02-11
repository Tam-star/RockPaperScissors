import React from "react";
import "./SymbolElement.scss";

//In the choice page, the symbols are slightly smaller
function SymbolElement({ type, status, changeContainer, hidden = false, win=false }) {
  if (hidden) {
    return <div className="symbol-container--hidden"></div>;
  } else {
    return (
      <div
        className={`symbol-container${
          status === "choice" ? "--choice" : ""
        } ${type} ${win ? `${type}--winner` : ''}`}
        data-testid="symbol-container"
        title={type}
        tabIndex={status === "choice" ? 0 : -1}
        data-symbol={type}
        role="button"
        onClick={changeContainer}
        onKeyUp={(event) => { if (event.code === 'Enter') changeContainer(event) }}
      >
        <img
          className={`symbol-container${
            status === "choice" ? "--choice" : ""
          }__image`}
          alt={type}
          src={`${process.env.PUBLIC_URL}/images/icon-${type}.svg`}
        />
      </div>
    );
  }
}

export default SymbolElement;

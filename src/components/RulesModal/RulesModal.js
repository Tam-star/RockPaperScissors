import React from "react";
import "./RulesModal.css";

function RulesModal() {

  return (
    <section className="rules-modal" data-testid="rules-modal">
      <h1>RULES</h1>
      <img alt="" className="close-icon" src="/images/icon-close.svg"></img>
      <img alt="" className="rules-img" src="/images/image-rules.svg"></img>
    </section>
  );
}

export default RulesModal;

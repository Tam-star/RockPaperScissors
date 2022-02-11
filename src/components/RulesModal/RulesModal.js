import React from "react";
import "./RulesModal.scss";

function RulesModal({ closeModal }) {
  return (
    <>
      <section className="rules-modal" data-testid="rules-modal">
        <h1>RULES</h1>
        <img alt="" className="rules-img" src="/images/image-rules.svg"></img>
        <img
          alt=""
          className="close-icon"
          src="/images/icon-close.svg"
          onClick={closeModal}
        ></img>
      </section>
      <div className="shadow"></div>
    </>
  );
}

export default RulesModal;

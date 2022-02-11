import React from "react";
import "./RulesModal.scss";

function RulesModal({ closeModal }) {
  return (
    <>
      <section className="rules-modal" data-testid="rules-modal">
        <h1>RULES</h1>
        <img
          alt="rules game : rock beats scissors, scissors beats paper, paper beats rock"
          className="rules-img"
          src={`${process.env.PUBLIC_URL}/images/image-rules.svg`}
        ></img>
        <img
          alt="close rules"
          className="close-icon"
          src={`${process.env.PUBLIC_URL}/images/icon-close.svg`}
          role="button"
          tabIndex={0}
          onClick={closeModal}
          onKeyUp={(event) => {
            if (event.code === "Enter") closeModal(event);
          }}
        ></img>
      </section>
      <div className="shadow"></div>
    </>
  );
}

export default RulesModal;

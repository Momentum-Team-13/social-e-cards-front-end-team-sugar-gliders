import React, { useState } from "react";

// adding comment
const Card = (props) => {
  const { key, title, bgcolor, msgfont, message, msgcolor, creator, cardType } =
    props;

  return (
    <>
      <div className="card_container" id={key}>
        <h3>{title}</h3>
        <h5>By: {creator}</h5>
        <div className={`card_details ${cardType}`}>
          <div className={bgcolor}>
            <div
              className={`background_block ${bgcolor} ${msgfont} ${msgcolor}`}
            >
              <h4>{message}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

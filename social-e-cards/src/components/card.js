import React, { useState } from "react";
import "./Card.css";
// import ReactCardFlip from "react-card-flip";
// adding comment
const Card = (props) => {
  const { key, color, outmessage, inmessage } = props;
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div className="card" id={key}>
        <div
          className={`card ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
        >
          <div className="front" ref={color}>
            {outmessage}
            {/* <img src={image} /> */}
          </div>
          <div className="back" ref={color}>
            {inmessage}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

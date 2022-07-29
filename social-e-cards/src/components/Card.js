import React, { useState, useRef } from "react";
import "./Card.css";
// import ReactCardFlip from "react-card-flip";
// adding comment
const Card = (props) => {
  const { key, color, outmessage, inmessage } = props;
  const [flip, setFlip] = useState(false);
  const frontEl = useRef();
  const backEl = useRef();
  return (
    <>
      <div className="card" id={key}>
        <div classname={`${color}`}>
          <div
            className={`card ${flip ? "flip" : ""}`}
            onClick={() => setFlip(!flip)}
          >
            <div className="front" ref={frontEl}>
              {outmessage}
              {/* <img src={image} /> */}
            </div>
            <div className="back" ref={backEl}>
              {inmessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

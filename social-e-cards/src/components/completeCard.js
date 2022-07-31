import React, { useState, useRef } from "react";
import "bulma/css/bulma.min.css";
import "./css/card.css";
import ReactCardFlip from "react-card-flip";

// import ReactCardFlip from "react-card-flip";
// adding comment
const Card = (props) => {
  const { id, color, index, outmessage, inmessage } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const frontEl = useRef();
  const backEl = useRef();

  const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px",
  };
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          style={CardStyle}
          onMouseEnter={() => setIsFlipped((prev) => !prev)}
          className="CardFront"
        >
          <div className="card" id={id} key={index}>
            <div className={`${color}`}>
              <div
              // className={`card ${flip ? "flip" : ""}`}
              // onClick={() => setFlip(!flip)}
              >
                <div className="front" ref={frontEl}>
                  {outmessage}
                  {/* <img src={image} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={CardStyle}
          onMouseLeave={() => setIsFlipped((prev) => !prev)}
          className="CardBack"
        >
          <div className="back" ref={backEl}>
            {inmessage}
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
};

//issues: local storage of token requires clearing cache with new sign in, card creatiion-dynamic data, id-why increasing by one after creation, dynamically generate time stamp on creation, img and hex code,
export default Card;

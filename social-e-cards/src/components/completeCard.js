import React, { useState, useRef } from "react";
import "./css/card.css";
import axios from "axios";
import Navigation from "./navigation";
import "bulma/css/bulma.min.css";
// import ReactCardFlip from "react-card-flip";
import "./css/card.css";
let Token = localStorage.getItem("auth_token");
// adding comment
export default function Card(props) {
  const { id, color, index, outmessage, inmessage, image } = props;
  // const [isFlipped, setIsFlipped] = useState(false);
  const frontEl = useRef();
  const backEl = useRef();
  console.log(props.image);
  console.log(props);

  const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px",
    backgroundColor: `#${props.color}`,
  };
  const deleteCard = (event) => {
    // event.preventDefault();
    console.log(event.target.id);
    axios.delete(
      `https://sg-ecard-api.herokuapp.com/ecards/${event.target.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${Token}`,
        },
      }
    );
    const element = document.getElementById(event.target.id);
    element.remove();
  };
  return (
    <>
      <div id={id}>
        <br />
        {/* <Navigation /> */}
        <br />
        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
        <div
          style={CardStyle}
          // onMouseEnter={() => setIsFlipped((prev) => !prev)}
          className="CardFront"
        >
          <div className="card" id={id} key={index}>
            <div className={`${color}`}>
              <div
              // className={`card ${flip ? "flip" : ""}`}
              // onClick={() => setFlip(!flip)}
              >
                <div className="front" ref={frontEl}>
                  {inmessage}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={CardStyle}
          // onMouseLeave={() => setIsFlipped((prev) => !prev)}
          className="CardBack"
        >
          <div className="back" ref={backEl}>
            {outmessage}
            <div className="image">
              <img src={props.image} alt="" />
            </div>
          </div>
          {/* Need to only show delete button for cards created by the user */}
          <button type="submit" id={id} onClick={(event) => deleteCard(event)}>
            Delete Card
          </button>
        </div>
        {/* </ReactCardFlip> */}
        {/* <Navigation className="bottom-nav" /> */}
      </div>
    </>
  );
}

import React, { useState, useRef } from "react";
import "./css/card.css"
import Navigation from "./navigation";
// import ReactCardFlip from "react-card-flip";

// adding comment
const Card = (props) => {
    const { id, color, index, outmessage, inmessage } = props;
    const [flip, setFlip] = useState(false);
    const frontEl = useRef();
    const backEl = useRef();
    return (
        <>
            <br />
            <Navigation />
            <br />
            <div className="card" id={id} key={index}>
                <div className={`${color}`}>
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
            <Navigation className="bottom-nav" />
        </>
    );
};

export default Card;
import React, { useState, useRef } from "react";
import "./css/card.css"
import Navigation from "./navigation";
import "bulma/css/bulma.min.css";
import ReactCardFlip from "react-card-flip";
import "./css/card.css";

// adding comment
export default function Card(props) {
    const { id, color, index, outmessage, inmessage, img } = props;
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
            <br />
            <Navigation />
            <br />
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
                                    {inmessage}
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
                        {outmessage}
                        <div className="image">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
            <Navigation className="bottom-nav" />

        </>
    );
};


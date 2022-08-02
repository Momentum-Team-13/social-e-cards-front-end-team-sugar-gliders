import React, { useState, useRef } from "react";
import "./css/card.css"
import Navigation from "./navigation";
import "bulma/css/bulma.min.css";
// import ReactCardFlip from "react-card-flip";
import "./css/card.css";
import axios from "axios";

// adding comment
export default function Card(props) {
    const { id, color, index, outmessage, inmessage, img, owner, following, ownerID } = props;
    // const [isFlipped, setIsFlipped] = useState(false);
    const frontEl = useRef();
    const backEl = useRef();
    let token = localStorage.getItem("auth_token");


    const CardStyle = {
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
        width: "200px",
        height: "300px",
        backgroundColor: `#${props.color}`
    };

    const handleFollowRequest = (event) => {
        event.preventDefault()
        axios
            .post('https://sg-ecard-api.herokuapp.com/followers/', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            })
    }

    const handleUnfollowRequest = (event) => {
        event.preventDefault()
        axios
            .delete('https://sg-ecard-api.herokuapp.com/followers/', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            })
    }




    const deleteCard = (event) => {
        // event.preventDefault();
        console.log(event.target.id);
        axios.delete(
            `https://sg-ecard-api.herokuapp.com/ecards/${event.target.id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            }
        );
        const element = document.getElementById(event.target.id);
        element.remove();
    };

    return (
        <>
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
                        <img src={img} alt="" />
                    </div>
                    {owner ?
                        (
                            <button type="submit" id={id} onClick={(event) => deleteCard(event)}>
                                Delete Card
                            </button>
                        ) : (
                            ""
                        )}
                    {following.includes(ownerID) ?
                        (<button onClick={() => handleUnfollowRequest()}>Unfollow User </button>)
                        :
                        (<button onClick={() => handleFollowRequest()}>Follow User </button>)
                    }
                </div>
            </div>
            {/* </ReactCardFlip> */}
            {/* <Navigation className="bottom-nav" /> */}

        </>
    );
};


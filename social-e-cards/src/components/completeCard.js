import React, { useState, useEffect, useRef } from "react";
import "./css/card.css"
import Navigation from "./navigation";
import "bulma/css/bulma.min.css";
// import ReactCardFlip from "react-card-flip";

import axios from "axios";

// adding comment
export default function Card(props) {
    const { id, color, index, outmessage, inmessage, img, owner, following, ownerID, followerCardID, userId } = props;
    // const [isFlipped, setIsFlipped] = useState(false);
    const frontEl = useRef();
    const backEl = useRef();
    let token = localStorage.getItem("auth_token");
    const [deleteID, setDeleteID] = useState(null)
    const [currentFollowers, setCurrentFollowers] = useState(following)
    console.log(ownerID)


    const CardStyleOutside = {
        border: "3px solid black",
        padding: "40px",
        margin: "20px",
        width: "300px",
        height: "150px",
        backgroundColor: `#${props.color}`
    };

    const CardStyleInside = {
        border: "2px solid black",
        padding: "20px",
        margin: "20px",
        width: "300px",
        height: "350px",
        backgroundColor: `#${props.color}`
    };

    useEffect(() => {
        axios
            .get('https://sg-ecard-api.herokuapp.com/followers/',
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                })
            .then((res) => {
                let array = []
                res.data.forEach(element => {
                    if (element.following === ownerID) {
                        setDeleteID(element.id)
                    }
                });

            })
            .catch((res) => {
                // let error = res.response.data.non_field_errors;
                // console.log(error);
                // setError(error);
            })
    }, [currentFollowers, token]);

    const handleFollowRequest = (event) => {
        axios
            .post('https://sg-ecard-api.herokuapp.com/followers/', {
                following: ownerID
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                }
            )
            .then(() => {
                const newFollowers = following.slice(0)
                newFollowers.push(ownerID)
                setCurrentFollowers(newFollowers)
            }

            )
    }

    const handleUnfollowRequest = (event) => {
        axios
            .delete(`https://sg-ecard-api.herokuapp.com/followers/${deleteID}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            })
            .then(() => {
                const index = following.indexOf(deleteID)
                const newFollowers = following.slice(0)
                newFollowers.splice(index, 1)
                setCurrentFollowers(newFollowers)
                console.log(newFollowers)
            }
            )
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
                style={CardStyleOutside}
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
                                {outmessage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={CardStyleInside}
                // onMouseLeave={() => setIsFlipped((prev) => !prev)}
                className="CardBack"
            >
                <div className="back" ref={backEl}>
                    {inmessage}
                    <div className="image">
                        <img src={img} alt="" />
                        {userId}
                        {owner ?
                            (
                                <button type="submit" id={id} onClick={(event) => deleteCard(event)}>
                                    Delete Card
                                </button>
                            ) : (
                                ""
                            )}
                    </div>
                    {currentFollowers.includes(ownerID) ?
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


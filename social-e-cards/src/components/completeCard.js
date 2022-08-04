import React, { useState, useEffect, useRef } from "react";
import "./css/card.css"
import Navigation from "./navigation";
import "bulma/css/bulma.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


// adding comment
export default function Card(props) {
    const { id, color, index, outmessage, inmessage, img, owner, following, ownerID, followerCardID, cardCreator } = props;
    const frontEl = useRef();
    const backEl = useRef();
    let token = localStorage.getItem("auth_token");
    const [deleteID, setDeleteID] = useState(null)
    const [currentFollowers, setCurrentFollowers] = useState(following)
    // console.log(cardCreator)
    console.log(owner)
    const [flip, setFlip] = useState(true);

    const outsideCard = {
        position: "absolute",
        left: "0%",
        top: "40%",
        width: "100%",
        textAlign: "center"
    }
    const insideCard = {
        textAlign: "center",
        left: "10%",
        top: "40%",
    }
    const InsideButton = {
        position: "absolute",
        left: "30%",
        bottom: "10% ",
        width: "40%"
    };
    const CreatedBt = {
        position: "absolute",
        bottom: "0",
        left: "0%",
        width: "100%",
        textAlign: "center"
    };

    const CardStyleOutside = {
        height: "350px",
        width: "250px",
        backgroundColor: `#${props.color}`
    };

    const CardStyleInside = {
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
            );
    }

    const deleteCard = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        axios
            .delete(
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
        window.location.reload();
    };
    return (
        <>
            <br />
            <br />
            <div class="card is-flex is-justify-content-centered" style={{ margin: "25px" }}>
                <div class="card-content">
                    {flip ?
                        <div class="content" style={CardStyleOutside}>
                            <div
                                id={id}
                                key={index}
                                className={`${color}`}
                                style={outsideCard}
                                ref={frontEl}>
                                {outmessage}
                            </div>

                            <button
                                style={InsideButton}
                                class="button is-light"
                                onClick={() => setFlip(false)}>
                                Look Inside!
                            </button>
                            <div style={CreatedBt}>Created by: {cardCreator}</div>
                        </div>

                        :
                        <div class="card-content" style={CardStyleInside}>
                            <div
                                style={{ position: "absolute", right: "5%" }}
                                class="button is-small is-dark"
                                onClick={() => setFlip(true)}>
                                x
                            </div>
                            <div
                                style={insideCard}
                                ref={backEl}>
                                {inmessage}
                                <div class="card-image">
                                    <figure class="image">
                                        <img src={img} alt="" />
                                    </figure>
                                </div>
                                <div class="card-footer">
                                    {owner ?
                                        (
                                            <>
                                                <button
                                                    type="submit"
                                                    id={id}
                                                    class="card-footer-item has-text-link"
                                                    onClick={(event) => deleteCard(event)}
                                                >
                                                    Delete Card
                                                </button>
                                                <button
                                                    type="submit"
                                                    id={id}
                                                    class="card-footer-item is-outlined"
                                                >
                                                    <Link to={`/edit/${id}`}>Edit</Link>
                                                </button>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    {(currentFollowers.includes(ownerID) && (!owner)) ? (<button class="card-footer-item" onClick={() => handleUnfollowRequest()}>Unfollow User </button>)
                                        : (!currentFollowers.includes(ownerID) && (!owner)) ? (<button class="card-footer-item" onClick={() => handleFollowRequest()}>Follow User </button>)
                                            : ""
                                    }
                                </div>
                            </div>
                        </div>}
                </div>
            </div >
        </>
    );
};


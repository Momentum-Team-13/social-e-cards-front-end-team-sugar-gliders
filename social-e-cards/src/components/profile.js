import React, { useState, useEffect } from "react";
import axios from "axios"
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';
import baseURL from "../App";
import Card from "./completeCard";

function Profile(props) {
    const { id, owner } = props
    let token = localStorage.getItem("auth_token");
    const [myCards, setMyCards] = useState(null);
    const [followerID, setFollowerID] = useState([]);

    useEffect(() => {
        axios
            .get("https://sg-ecard-api.herokuapp.com/ecards/?list=me", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) =>
                setMyCards(res.data));
    }, [setMyCards, token])

    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <br />
            <Navigation />
            <br />
            <h1>My Profile</h1>
            <h3>Your Cards Below</h3>
            <br />
            <h2>Click on a Card to See Inside Message</h2>
            <div className="card-preview">
                <br />
                {myCards &&
                    myCards.map((card, index) => {
                        return (
                            <Card
                                id={card.id}
                                color={card.card_color}
                                key={index}
                                outmessage={card.card_outer_message}
                                inmessage={card.card_inner_message}
                                img={card.card_image}
                                owner={true}
                                ownerID={card.card_owner.id}
                                following={followerID}
                                followerCardID={card.id}
                                cardCreator={card.card_owner.username}
                            />
                        )
                    })}
            </div>
            <div className="bottom-nav">
            </div>
            <br />
        </>
    );
}

export default Profile

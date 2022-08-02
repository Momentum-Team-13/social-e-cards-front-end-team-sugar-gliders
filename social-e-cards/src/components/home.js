import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';
import Follower from "./peopleFollowing";
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "./completeCard";

function Home({ currentUser }) {
    const { state } = useLocation()
    const [followers, setFollowers] = useState([]);
    const areYouLoggedIn = localStorage.getItem("log in")
    let token = localStorage.getItem("auth_token");
    const [cards, setCards] = useState(null);
    const [myCards, setMyCards] = useState(null);
    const [followerID, setFollowerID] = useState([]);

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
                setFollowers(res.data)
                let array = []
                res.data.forEach(element => {
                    array.push(element.following)
                });
                setFollowerID(array)
            })
            .catch((res) => {
                // let error = res.response.data.non_field_errors;
                // console.log(error);
                // setError(error);
            })
    }, [token]);

    useEffect(() => {
        axios
            .get("https://sg-ecard-api.herokuapp.com/ecards/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                setCards(res.data)
            });
    }, [setCards, token]);

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
        <div className="container">
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
            <h3 className="card-preview">
                See All Created Cards
                {cards &&
                    cards.map((card, index) => {
                        return (
                            <Card
                                id={card.id}
                                color={card.card_color}
                                key={index}
                                // msgfont={card.outer_font}
                                outmessage={card.card_outer_message}
                                inmessage={card.card_inner_message}
                                img={card.card_image}
                                owner={false}
                                following={followerID}
                                ownerID={card.card_owner.id}
                                followerCardID={card.id}
                            />
                        );
                    })}</h3>
            {/* preview of some cards
            button to navigate to all created cards  */}
            <br />
            {areYouLoggedIn ? (
                <>
                    <h3 className="card-preview">
                        See All Cards from People you Follow
                        {followers.map((followers, index) => (
                            <Follower followers={followers.user_following} key={index} />
                        ))}
                    </h3>
                    {/* preview of some cards
            button to navigate to all people you follow  */}
                    <br />
                    <h3 className="card-preview">
                        See All Cards You've Created
                        {myCards &&
                            myCards.map((card, index) => {
                                return (
                                    <Card
                                        id={card.id}
                                        color={card.card_color}
                                        key={index}
                                        // msgfont={card.outer_font}
                                        outmessage={card.card_outer_message}
                                        inmessage={card.card_inner_message}
                                        img={card.card_image}
                                        owner={true}
                                        ownerID={card.card_owner.id}
                                        following={followerID}
                                        followerCardID={card.id}
                                    />
                                )
                            })}
                    </h3>
                    {/* preview of some cards
            button to navigate to all cards you've created  */}
                    <br />
                </>
            ) : (
                " "
            )
            }
            {areYouLoggedIn ? (
                <>
                    <h1>Currently Logged In : {currentUser}</h1>
                </>
            ) : (
                <>
                    <h1>You are Logged Out</h1>
                </>
            )}
            {/* <h1>Logged in as {person} </h1> */}
            <br />
            <Navigation />
            <br />
        </div>
    );
}

export default Home
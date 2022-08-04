import axios from "axios";
import baseURL from "../App";
import { useEffect, useState } from "react";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';
import Card from "./completeCard";
import Follower from "./peopleFollowing";

export default function SeeProfile({ currentUser }) {
    const [followers, setFollowers] = useState([]);
    const [followerID, setFollowerID] = useState([]);
    const [error, setError] = useState(null);
    const [followerCards, setFollowerCards] = useState([]);
    console.log(followers)

    let token = localStorage.getItem("auth_token");

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
                let error = res.response.data.non_field_errors;
                console.log(error);
                setError(error);
            })
    }, [setFollowerID, token]);

    useEffect(() => {
        axios
            .get("https://sg-ecard-api.herokuapp.com/ecards/?list=following",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                })
            .then((res) => {
                setFollowerCards(res.data)
            })
    }, [setFollowerCards, token])

    return (
        <>
            <section class="hero is-fluid has-background-light">
                <div class="container is-fluid has-background-light">
                    <nav class="navbar is-spaced is-transparent is-medium is-fixed-top is-flex is-justify-content-space-evenly" role="navigation">
                        <br />
                        <h1 class="title is-2 is-spaced is-centered">Welcome to Gliding Sugar Cards!</h1>
                        <Navigation class="navbar-item is-info is-spaced has-dropdown is-hoverable" />
                        <br />
                    </nav>
                    <h3 class="subtitle is-3 is-flex is-aligned-self-center is-spaced ">Who You Follow</h3>
                    <h5 class="subtitle is-3 is-flex is-aligned-self-center is-spaced ">You are Currently Following {followers.length} People</h5>
                    <h2 class="subtitle is-3 is-flex is-aligned-self-center is-spaced ">See All Followers Cards</h2>
                    <div className="people-following">
                        {followers.map((followers, index) => (
                            <Follower followers={followers.user_following} key={index} />
                        ))}
                        <h3 className="card-preview">
                            {followerCards &&
                                followerCards.map((card, index) => {
                                    return (
                                        <Card
                                            id={card.id}
                                            color={card.card_color}
                                            key={index}
                                            outmessage={card.card_outer_message}
                                            inmessage={card.card_inner_message}
                                            img={card.card_image}
                                            owner={false}
                                            following={followerID}
                                            ownerID={card.card_owner.id}
                                            followerCardID={card.id}
                                            cardCreator={card.card_owner.username}
                                        />
                                    );
                                })}
                        </h3>
                    </div>
                    <div className="bottom-nav">
                    </div>
                    <br />
                </div>
            </section>
        </>
    );
}


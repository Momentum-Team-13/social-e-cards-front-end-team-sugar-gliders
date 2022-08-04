import { Link, useLocation } from "react-router-dom";
import Navigation from "./navigation";
import Follower from "./peopleFollowing";
import { useEffect, useState } from 'react'
import axios from "axios"
import Card from "./completeCard";
import 'bulma/css/bulma.min.css';

function Home({ currentUser }) {
    const { state } = useLocation()
    const [followers, setFollowers] = useState([]);
    const areYouLoggedIn = localStorage.getItem("log in")
    const [cards, setCards] = useState(null);
    const [myCards, setMyCards] = useState(null);
    const [followerID, setFollowerID] = useState([]);
    const [error, setError] = useState(null);
    let token = localStorage.getItem("auth_token");

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


    return (
        <div className="container">
            {areYouLoggedIn ? (
                <>
                    <section class="container is-fluid has-background-light">
                        <div class="container is-fluid has-background-light">
                            <nav class="navbar is-spaced is-transparent is-medium is-fixed-top is-flex is-justify-content-space-evenly" role="navigation">
                                <br />
                                <h1 class="title is-2 is-spaced is-centered">Welcome to Gliding Sugar Cards!</h1>
                                <Navigation class="navbar-item is-info is-spaced has-dropdown is-hoverable" />
                                <br />
                            </nav>
                            <div class='column is-full'>
                                <br />
                                <br />
                                <h2 class="subtitle is-3 is-flex is-aligned-self-center is-spaced ">See All Created Cards</h2>

                                <div className="card-preview">
                                    {cards &&
                                        cards.map((card, index) => {
                                            return (
                                                <Card
                                                    id={card.id}
                                                    color={card.card_color}
                                                    key={index}
                                                    outmessage={card.card_outer_message}
                                                    inmessage={card.card_inner_message}
                                                    img={card.card_image}
                                                    owner={currentUser === card.card_owner.username}
                                                    following={followerID}
                                                    ownerID={card.card_owner.id}
                                                    followerCardID={card.id}
                                                    cardCreator={card.card_owner.username}
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <section class="hero is-info">
                        <div class="container  is-info">
                            <div class='column is-flex-direction-row is-full'>
                                <h1 class="title is-1 is-spaced is-flex is-justify-content-centered">Welcome to Gliding Sugar Cards!</h1>
                                <h1 class="subtitle is-2 is-flex is-justify-content-centered">Log In or Create User to See Cards</h1>
                                <br />
                                <button class="button is-medium is-fullwidth is-danger is-light is-outlined is-rounded">
                                    <Link to={"/logIn"}>Log In</Link>
                                </button>
                                <br />
                                <button class="button is-medium is-fullwidth is-danger is-light is-outlined is-rounded">
                                    <Link to={"/newUser"}>Create User</Link>
                                </button>
                                <br />
                            </div>
                        </div>
                    </section>
                </>
            )
            }
            <br />
            <br />
        </div >
    );
}

export default Home
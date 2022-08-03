import { Link, useLocation } from "react-router-dom";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';
import Follower from "./peopleFollowing";
import { useEffect, useState } from 'react'
import axios from "axios"
import Card from "./completeCard";
// import "./css/home.css";



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

    // const seeUserPage()

    return (
        <div className="container">
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
            {areYouLoggedIn ? (
                <>
                    <h2>See All Created Cards</h2>
                    <h3 className="card-preview">
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
                                        owner={false}
                                        following={followerID}
                                        ownerID={card.card_owner.id}
                                        followerCardID={card.id}
                                        cardCreator={card.card_owner.username}
                                    />
                                );
                            })}
                    </h3>
                    <h1>Currently Logged In : {currentUser}</h1>
                </>
            ) : (
                <>
                    <div class="box">
                        <h1>Log In or Create User to See Cards!</h1>
                        <button className="landing-nav">
                            <Link to={"/logIn"}>Log In</Link>
                        </button>
                        <button className="landing-nav">
                            <Link to={"/newUser"}>Create User</Link>
                        </button>
                    </div>
                </>
            )
            }
            <br />
            <br />
        </div >
    );
}

export default Home
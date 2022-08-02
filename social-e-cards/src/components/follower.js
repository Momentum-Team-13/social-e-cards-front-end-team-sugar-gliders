import axios from "axios";
import baseURL from "../App";
import { useEffect, useState } from "react";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';
import Card from "./completeCard";

export default function SeeProfile({ currentUser }) {
    const [followers, setFollowers] = useState([]);
    const [followerIndex, setFollowerIndex] = useState(0);
    const [number, setNumber] = useState([]);
    const [followerUsername, setFollowerUsername] = useState([])
    const [error, setError] = useState([]);
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
                console.log(res.data)

            })
            .catch((res) => {
                // let error = res.response.data.non_field_errors;
                // console.log(error);
                // setError(error);
            })
    }, [setFollowers]);

    function Follower(followers) {
        console.log(followers)
        return (
            <div className="follower-card">
                <br /><h1>Username: {followers.followers.username}</h1>
                <h2>Email: {followers.followers.email}</h2><br />

            </div>
        )
    }

    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
            <h3>Who You Follow</h3>
            <div className="people-following">
                {followers.map((followers, index) => (
                    <Follower followers={followers.user_following} key={index} />
                ))}
            </div>
            <div className="bottom-nav">
            </div>
            {/* <div onClick={(e) => seeFollowers(e)}> click to see follower list</div> */}
            <br />
            <Navigation />
        </>
    );
}


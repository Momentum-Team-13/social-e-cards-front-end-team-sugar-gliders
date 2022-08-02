import axios from "axios";
import baseURL from "../App";
import { useEffect, useState } from "react";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';

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
                // console.log(followerIndex)
                // let followerDisplay = followers[followerIndex].username
                // console.log(followers[0].user_following.username)
                // console.log(followerDisplay)
                // setFollowerUsername(followerUsername)
                // setNumber(number);
                // console.log(res.data);
                // console.log(followerUsername);
                // console.log(number);
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
                <h1>Username: {followers.followers.username}</h1>
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
                {/* {followers &&
                    followers.map((follower, index) => {
                        return (
                            <Follower
                                id={followers.id}
                                followerUsername={followers.username}
                            />
                        );
                    })
                } */}
                {/* {followers &&
                    followers.map((follower, index) => {
                    })
                } */}
            </div>
            {/* {followers && (
                <div>
                data.user_following.username
                </div>
            )} */}
            <div className="bottom-nav">
            </div>
            {/* <div onClick={(e) => seeFollowers(e)}> click to see follower list</div> */}
            <br />
            <Navigation />
        </>
    );
}


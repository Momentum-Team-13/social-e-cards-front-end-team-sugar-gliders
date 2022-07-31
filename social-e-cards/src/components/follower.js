import 'bulma/css/bulma.min.css';
import Navigation from "./navigation";
import axios from "axios";
import { useEffect } from 'react';

function Follower({ baseURL, authToken, username }) {
    const getUserInfo = () => {
        axios
            .get(
                `${baseURL}auth/users/me`,
                {},
                { headers: { Authorization: `Token${authToken}` } }
            )
            .then((res) => console.log(res))
            .catch((res) => console.log(res));
    }
    const seeFollower = () => {
        axios
            .get(
                `${baseURL}followers/`,
                {},
                { headers: { Authorization: `Token ${authToken}` } }
            )
            .then((res) => console.log(res))
            .catch((res) => console.log(res));
    }
    return (
        <>
            <h1>Someone You Follow</h1>
            <h3>See {username} </h3>
            <br />
            <button onClick={(event) => getUserInfo(event)}>Click to see more</button>
            <br />
            <br />
            <Navigation />
        </>
    );
}

export default Follower
import 'bulma/css/bulma.min.css';
import Navigation from "./navigation";
import axios from "axios";
import { useState, useEffect } from 'react';

function Follower({ baseURL, authToken, username }) {
    const [error, setError] = useState([])

    const seeAllFollowers = (event) => {
        event.preventDefault()
        axios
            .get(`https://sg-ecard-api.herokuapp.com/followers/`,
                {
                    user_following: { username }
                },
                {
                    headers: { Authorization: `Token ${authToken}` }
                })
            .then((res) => console.log(res))
            // let followerID = response.data.user_following.id
            .catch((res) => {
                let error = res.response.data.non_field_errors;
                setError(error);
            })
    }

    // const removeFollower = (event) => {
    //     event.preventDefault()
    //     axios
    //         .delete(`${baseURL}/followers/${followerID}`,
    //             {},
    //             {
    //                 headers: { Authorization: `Token ${authToken}` }
    //             })
    // }

    // const getUserInfo = () => {
    //     axios
    //         .get(
    //             `${baseURL}auth/users/me`,
    //             {},
    //             { headers: { Authorization: `Token${authToken}` } }
    //         )
    //         .then((res) => console.log(res))
    //         .catch((res) => console.log(res));
    // }
    // const seeFollower = () => {
    //     axios
    //         .get(
    //             `${baseURL}followers/`,
    //             {},
    //             { headers: { Authorization: `Token ${authToken}` } }
    //         )
    //         .then((res) => console.log(res))
    //         .catch((res) => console.log(res));
    // }


    return (
        <>

            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>

            <br />
            <Navigation />
            <br />
            <h1>Who You Follow</h1>
            <br />
            {/* <button onClick={(event) => getUserInfo(event)}>Click to see more</button> */}
            <br />
            <br />
            <Navigation />
        </>
    );
}

export default Follower
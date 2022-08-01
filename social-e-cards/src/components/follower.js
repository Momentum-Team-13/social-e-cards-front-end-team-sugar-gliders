// import React, { useState, useEffect } from "react";
// import axios from "axios"
// import Navigation from "./navigation";
// import baseURL from "../App";

// function Profile({ username }, { token }) {
//     const [follow, setFollow] = useState([]);
//     const [profileData, setProfileData] = useState([]);

//     const handlePersonalProfile = (event) => {
//         axios
//             .get(`${baseURL}/auth/users/me/`, {
//                 headers: { Authorization: `Token ${token}` },
//             })
//             .then((res) => {
//                 console.log(res);
//                 setProfileData(res.data);
//             })
//             .catch((res) => console.log(res));
//     };

//     return (
//         <>
//             <div onClick={(event) => handlePersonalProfile(event)}></div>
//             <br />
//             <h1 className="app-name">Gliding Sugar Cards</h1>
//             <br />
//             <br />
//             <Navigation />
//             <br />
//             <h1>{profileData.username}My Profile</h1>
//             <h3>username, email, image, date, ID, name</h3>
//             <br />
//             <div className="bottom-nav">
//                 <Navigation />
//             </div>
//             <br />
//         </>
//     );
// }

// export default Profile

import axios from "axios";
import baseURL from "../App";
import { useEffect, useState } from "react";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';

export default function SeeProfile({ token, username }) {
    const [profileData, setProfileData] = useState(null);
    // const [editPage, setEditPage] = useState(false);

    const getprofileData = () => {
        axios
            .get(`${baseURL}/auth/users/me/`, {
                headers: { Authorization: `Token ${token}` },
            })
            .then((res) => {
                setProfileData(res.data);
                console.log(res);
            })
            .catch((res) => console.log(res));
    };

    const seeFollowers = () => {
        axios
            .get(
                `${baseURL}followers/`,
                {},
                { headers: { Authorization: `Token ${token}` } }
            )
            .then((res) => console.log(res))
            .catch((res) => console.log(res));
    };

    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
            <div onClick={(e) => getprofileData(e)}> click to get user info</div>
            {profileData && (
                <div>
                    <h1>{profileData.username}'s page</h1>
                    <div>Email is: {profileData.email}</div>
                    <div>Profile Id Number: {profileData.id}</div>
                    {/* <button onClick={() => handleEdit()}>Edit Profile</button> */}
                </div>
            )}
            <div className="bottom-nav">
            </div>
            <h3>people following {username}</h3>
            <div onClick={(e) => seeFollowers(e)}> click to see follower list</div>
            <br />

            <Navigation />
        </>
    );
}

// import 'bulma/css/bulma.min.css';
// import Navigation from "./navigation";
// import axios from "axios";
// import { useState, useEffect } from 'react';

// function Follower({ baseURL, authToken, username }) {
//     const [error, setError] = useState([])

//     const seeAllFollowers = (event) => {
//         event.preventDefault()
//         axios
//             .get(`https://sg-ecard-api.herokuapp.com/followers/`,
//                 {
//                     user_following: { username }
//                 },
//                 {
//                     headers: { Authorization: `Token ${authToken}` }
//                 })
//             .then((res) => console.log(res))
//             // let followerID = response.data.user_following.id
//             .catch((res) => {
//                 let error = res.response.data.non_field_errors;
//                 setError(error);
//             })
//     }

//     const removeFollower = (event) => {
//         event.preventDefault()
//         axios
//             .delete(`${baseURL}/followers/${followerID}`,
//                 {},
//                 {
//                     headers: { Authorization: `Token ${authToken}` }
//                 })
//     }

//     const getUserInfo = () => {
//         axios
//             .get(
//                 `${baseURL}auth/users/me`,
//                 {},
//                 { headers: { Authorization: `Token${authToken}` } }
//             )
//             .then((res) => console.log(res))
//             .catch((res) => console.log(res));
//     }
//     const seeFollower = () => {
//         axios
//             .get(
//                 `${baseURL}followers/`,
//                 {},
//                 { headers: { Authorization: `Token ${authToken}` } }
//             )
//             .then((res) => console.log(res))
//             .catch((res) => console.log(res));
//     }


//     return (
//         <>

//             <br />
//             <h1 className="app-name">Gliding Sugar Cards</h1>

//             <br />
//             <Navigation />
//             <br />
//             <h1>Who You Follow</h1>
//             <br />
//             {/* <button onClick={(event) => getUserInfo(event)}>Click to see more</button> */}
//             <br />
//             <br />
//             <Navigation />
//         </>
//     );
// }

// export default Follower
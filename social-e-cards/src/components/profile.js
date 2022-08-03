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

    // const deleteCard = (event) => {
    //     // event.preventDefault();
    //     console.log(event.target.id);
    //     axios
    //         .delete(
    //             `https://sg-ecard-api.herokuapp.com/ecards/${event.target.id}`,
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Token ${token}`,
    //                 },
    //             }
    //         );
    //     const element = document.getElementById(event.target.id);
    //     element.remove();
    // };

    return (
        <>
            {/* <div onClick={(event) => handlePersonalProfile(event)}></div> */}
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <br />
            <Navigation />
            <br />
            <h1>My Profile</h1>
            <h3>Your Cards Below</h3>
            <br />
            <h3 className="card-preview">
                Click on a Card to See Inside Message
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
                                cardCreator={card.card_owner.username}
                            />
                        )
                    })}
                {/* {owner ?
                    (
                        <button
                            type="submit"
                            id={id}
                            onClick={(event) => deleteCard(event)}>
                            Delete Card
                        </button>
                    ) : (
                        ""
                    )} */}
            </h3>
            <div className="bottom-nav">
            </div>
            <br />
        </>
    );
}

export default Profile

// import axios from "axios";
// import baseURL from "../App";
// import { useEffect, useState } from "react";
// import Navigation from "./navigation";

// export default function SeeProfile({ token, username }) {
//     const [profileData, setProfileData] = useState(null);
//     const [editPage, setEditPage] = useState(false);

//     const getprofileData = () => {
//         axios
//             .get(`${baseURL}/auth/users/me/`, {
//                 headers: { Authorization: `Token ${token}` },
//             })
//             .then((res) => {
//                 setProfileData(res.data);
//                 console.log(res);
//             })
//             .catch((res) => console.log(res));
//     };

//     const seeFollowers = () => {
//         axios
//             .get(
//                 `${baseURL}followers/`,
//                 {},
//                 { headers: { Authorization: `Token ${token}` } }
//             )
//             .then((res) => console.log(res))
//             .catch((res) => console.log(res));
//     };

//     return (
//         <>
//             <br />
//             <h1 className="app-name">Gliding Sugar Cards</h1>
//             <br />
//             <Navigation />
//             <br />
//             <div onClick={(e) => getprofileData(e)}> click to get user info</div>
//             {profileData && (
//                 <div>
//                     <h1>{profileData.username}'s page</h1>
//                     <div>Email is: {profileData.email}</div>
//                     <div>Profile Id Number: {profileData.id}</div>
//                     {/* <button onClick={() => handleEdit()}>Edit Profile</button> */}
//                 </div>
//             )}
//             <div className="bottom-nav">
//             </div>
//             <h3>people following {username}</h3>
//             <div onClick={(e) => seeFollowers(e)}> click to see follower list</div>
//             <br />

//             <Navigation />
//         </>
//     );
// }
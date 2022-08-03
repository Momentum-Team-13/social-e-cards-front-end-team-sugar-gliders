import React from "react";
import { Link } from "react-router-dom"
import LogOut from "./logOut";
import 'bulma/css/bulma.min.css';
// import "./css/home.css";



function Navigation({ state, handlePersonalProfile }) {
    const areYouLoggedIn = localStorage.getItem("log in")
    const username = localStorage.getItem("username")

    return (
        <>
            <div id="navigation-bar">
                {areYouLoggedIn ? (
                    <>
                        <button className="nav">
                            <Link to={"/"}>Home</Link>
                        </button>
                        <button className="nav">
                            <Link to={"/profile"}>Profile</Link>
                        </button>
                        <button className="nav">
                            <Link to={"/createCard"}>Create Cards</Link>
                        </button>
                        {/* <button className="nav">
                            <Link to={"/gallery/"}>Gallery</Link>
                        </button> */}
                        <button className="nav">
                            <Link to={"/following/"}>Following</Link>
                        </button>
                        <LogOut />
                    </>
                ) : (

                    ""

                )
                }
            </div>
        </>
    );
}

export default Navigation


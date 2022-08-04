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
            <div class="navbar" role="navigation">
                {areYouLoggedIn ? (
                    <>
                        <button class="button is-outlined is-danger is-light is-large">
                            <Link to={"/"}>Home</Link>
                        </button>
                        <button class="button  is-outlined is-danger is-light is-large">
                            <Link to={"/profile"}>Profile</Link>
                        </button>
                        <button class="button is-danger is-outlined is-light is-large">
                            <Link to={"/createCard"}>Create Cards</Link>
                        </button>
                        <button class="button is-danger is-light is-outlined is-large">
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


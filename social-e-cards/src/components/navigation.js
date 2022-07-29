import React, { useState } from "react";
import { Link } from "react-router-dom"

function Navigation() {
    const areYouLoggedIn = localStorage.getItem("log in")
    console.log(areYouLoggedIn)

    return (
        <>
            {areYouLoggedIn ? (
                <>
                    <button>
                        <Link to={"/home"}>Home</Link>
                    </button>
                    <button>
                        <Link to={"/profile"}>Profile</Link>
                    </button>
                    <button>
                        <Link to={"/createCard"}>Create Cards</Link>
                    </button>
                    <button>
                        <Link to={"/follower"}>Following</Link>
                    </button>
                    <button>
                        <Link to={"/logOut"}>Log Out?</Link>
                    </button>
                </>
            ) : (
                <>
                    <button>
                        <Link to={"/home"}>Home</Link>
                    </button>
                    <button>
                        <Link to={"/logIn"}>Log In</Link>
                    </button>
                    <button>
                        <Link to={"/newUser"}>Create User</Link>
                    </button>
                </>
            )
            }
        </>
    );
}

export default Navigation


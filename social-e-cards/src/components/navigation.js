import React, { useEffect } from "react";
// import NavigationLink from "./nav-link";
import { useState } from "react";
import LogIn from "./logIn";
import NewUser from "./newUser";
import { Link } from "react-router-dom"

function Navigation({ areYouLoggedIn }) {
    // const [areYouLoggedIn, setAreYouLoggedIn] = useState(false)

    // if (username && authToken) {
    //     setAreYouLoggedIn(true)
    // }

    // useEffect(() => {
    //     if (areYouLoggedIn === true) {
    //         // setLoggedIn("Log Out")
    //         console.log("this is true")
    //     } else {
    //         // setLoggedIn("Log In")
    //         console.log("this is false")
    //     }
    // }, [areYouLoggedIn])

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


import React, { useEffect } from "react";
import NavigationLink from "./nav-link";
import { useState } from "react";

function Navigation(props) {
    const [loggedIn, setLoggedIn] = useState("Log In")
    useEffect(() => {
        if (props.loggedIn === true) {
            setLoggedIn("Log Out")
        } else {
            setLoggedIn("Log In")
        }
    }, [props.loggedIn])

    return (
        <>
            <h1>HELLO AGAIN</h1>
            <NavigationLink text={loggedIn} link="/auth/token/login/" />
            {props.loggedIn ? (
                <>
                    <NavigationLink text="Profile " link="/auth/users/me/" />
                    <NavigationLink text="Create Cards " link="/create-card/" />
                </>
            ) : (
                <>
                    <Navigation text="Create Account" link="/auth/users/" />
                </>
            )
            }
            {/* <NavigationLink text="Create Cards " link="/create-cards" /> */}
        </>
    );
}

export default Navigation


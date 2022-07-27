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
            <NavigationLink text={loggedIn} link="/log-in" />
            {props.loggedIn ? (
                <>
                    <NavigationLink text="Profile " link="https://www.excalidraw.com" />
                    <NavigationLink text="Create Cards " link="https://www.github.com" />
                </>
            ) : (
                " "
            )
            }
            {/* <NavigationLink text="Create Cards " link="/create-cards" /> */}
        </>
    );
}

export default Navigation


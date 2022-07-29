// const [token, setToken] = useLocalStorageState('cardToken', null)
// const [username, setUsername] = useLocalStorageState('card')
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import axios from "axios";
import Navigation from "./navigation";

function LogOut({ authToken, setAuthToken, username }) {
    const handleSubmitTwo = () => {
        axios
            .post("https://sg-ecard-api.herokuapp.com/auth/token/logout/",
                {},
                {
                    headers: {
                        Authorization: `Token ${authToken}`,
                    }
                })
            .then(() =>
                setAuthToken(" ", null))
    }

    return (
        <>
            <h1>Log Out?</h1>
            {/* // <button type="submit" onClick={(event) => handleSubmitTwo(event)}> {""} Log In</button> */}
            <Navigation />
        </>
    );
}

export default LogOut
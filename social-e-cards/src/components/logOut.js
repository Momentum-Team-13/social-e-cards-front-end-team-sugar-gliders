// const [token, setToken] = useLocalStorageState('cardToken', null)
// const [username, setUsername] = useLocalStorageState('card')
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import LogIn from "./logIn";

function LogOut({ baseURL, authToken }) {
    const [token, setToken] = useLocalStorageState('auth_token', null)
    const [username, setUsername] = useLocalStorageState('username', ' ')

    const setAuth = (username, token) => {
        setToken(token)
    }

    return (
        <h1>Log Out?
        </h1>
    );
}

export default LogOut
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Navigation from './navigation'

function LogOut({ state, username, setUsername, password, setPassword, authToken, setAuthToken, error, setError, areYouLoggedIn, setAreYouLoggedIn }) {
    const returnHome = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        returnHome("/home/");
    }

    return (
        <>
            <button type="submit" onClick={(event) => handleLogOut(event)}> {""} Log Out</button>
        </>
    );
}

export default LogOut
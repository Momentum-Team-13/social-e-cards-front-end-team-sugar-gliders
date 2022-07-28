import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"

function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authToken, setAuthToken] = useState('')
    const [error, setError] = useState([])
    const [areYouLoggedIn, setAreYouLoggedIn] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post(`https://sg-ecard-api.herokuapp.com/auth/token/login`, {
                username: username,
                password: password,
            })
            .then((res) => {
                setAuthToken(res.data.auth_token);
                console.log(authToken);
            })
            .catch((res) => {
                let error = res.response.data.non_field_errors;
                setError(error);
            })
    }
    useEffect(() => {
        if (username && authToken) {
            setAreYouLoggedIn(true)
        }
        if (areYouLoggedIn === true) {
            // setLoggedIn("Log Out")
            console.log("this is true")
        } else {
            // setLoggedIn("Log In")
            console.log("this is false")
        }
    }, [areYouLoggedIn, authToken, username])

    return (
        <>
            <h1>Log in form </h1>
            <label htmlFor='username'>Username</label>
            <input type="text"
                id='username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <form>
                <>
                    <label htmlFor='password'>Password</label>
                    <input type="text"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </>

                <button type="submit" onClick={(event) => handleSubmit(event)}> {""} Log In</button>
                {areYouLoggedIn && (
                    <Navigate to="/home" />
                )}
            </form>
            {error && <div>{error}</div>}

        </>
    );
}

export default LogIn
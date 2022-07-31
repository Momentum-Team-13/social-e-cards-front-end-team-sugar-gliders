import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"
import Navigation from './navigation'
import 'bulma/css/bulma.min.css';

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
                headers: { Authorization: `Token ${authToken}` }
            })
            .then((res) => {
                setAuthToken(res.data.auth_token);
                console.log(res.data.auth_token);
            })
            .catch((res) => {
                let error = res.response.data.non_field_errors;
                setError(error);
            })
    }

    useEffect(() => {
        if (username && authToken) {
            setAreYouLoggedIn(true)
            localStorage.setItem("log in", "true")
            console.log(authToken);
            console.log("this is true")
        } else {
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
                <br />
                <br />
                <button type="submit" onClick={(event) => handleSubmit(event)}> {""} Log In</button>
            </form>
            <br />
            <Navigation />
            {error && <div>{error}</div>}
            {console.log(areYouLoggedIn)}
            {areYouLoggedIn ? (
                <Navigate to="/" state={{ areYouLoggedIn }} username={{ username }} />)
                : (
                    " "
                )}
        </>
    );
}

export default LogIn
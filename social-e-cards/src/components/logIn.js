import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Navigation from './navigation'
import 'bulma/css/bulma.min.css';


function LogIn({ auth }, { setAuth }) {
    const [username, setUsername] = useState('')
    console.log(username)
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [error, setError] = useState([])
    const [areYouLoggedIn, setAreYouLoggedIn] = useState(false)
    const [data, setData] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post(`https://sg-ecard-api.herokuapp.com/auth/token/login`, {
                username: username,
                password: password,
                headers: { Authorization: `Token ${token}` }
            })
            .then((res) => {
                localStorage.setItem("auth_token", res.data.auth_token);
                setData(res);
                // setUsername(username);

                setToken(res.data.auth_token);
                console.log(token)
            })
            .catch((res) => {
                let error = res.response.data.non_field_errors;
                console.log(error);
                setError(error);
            })
    }

    useEffect(() => {
        if (username && token) {
            setAreYouLoggedIn(true)
            localStorage.setItem("log in", "true")
            localStorage.setItem("username", `${username}`)
            console.log(token);
            console.log(username)
            console.log(areYouLoggedIn)
            console.log("this is true")
        } else {
            console.log("this is false")
        }
    }, [areYouLoggedIn, token, username])

    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />

            <Navigation />
            <br />
            <h1>Log in form </h1>
            <label htmlFor='username'>Username</label>
            <input type="text"
                id='username'
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <form>
                <>
                    <label htmlFor='password'>Password</label>
                    <input type="text"
                        id="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </>
                <br />
                <br />
                <button type="submit" onClick={(event) => handleSubmit(event)}> {""} Log In</button>
            </form>
            <br />

            {error && <div>{error}</div>}

            {areYouLoggedIn ? (
                <Navigate to="/" state={{ areYouLoggedIn }} currentUser={{ username }} />)
                : (
                    " "
                )}
        </>
    );
}

export default LogIn
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./navigation";

function NewUser(baseURL) {
    const returnHome = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [authToken, setAuthToken] = useState('')
    const [error, setError] = useState([])
    const handleNewUser = (event) => {
        event.preventDefault();
        axios
            .post(`https://sg-ecard-api.herokuapp.com/auth/users/`, {
                username: username,
                password: password,
                headers: { Authorization: `Token ${authToken}` }
            })
            .then((res) => {
                console.log(res)
                localStorage.setItem("log in", "true");
                returnHome({ baseURL })
            })
            .catch((res) => {
                let username_error = res.response.data.username;
                let password_error = res.response.data.password;
                if (username_error) {
                    for (let error of username_error) {
                        setError(error);
                    }
                } else if (password_error) {
                    for (let error of password_error) {
                        setError(error);
                        console.log(error);
                    }
                }
            });

    };
    return (
        <>
            <h1>add new users</h1>
            <div>
                <label htmlFor="username"> username</label>
                <input
                    id="username"
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password"> Password</label>
                <input
                    id="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit" onClick={(event) => handleNewUser(event)}>
                {" "}
                Add User
            </button>

            <Navigation />
            {error && <div>{error}</div>}

        </>
    );
}

export default NewUser

//daniela, poopsickle
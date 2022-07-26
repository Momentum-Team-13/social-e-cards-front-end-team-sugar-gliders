import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';

function NewUser(baseURL) {
    const returnHome = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState('')
    const [error, setError] = useState([])
    const handleNewUser = (event) => {
        event.preventDefault();
        axios
            .post(`https://sg-ecard-api.herokuapp.com/auth/users/`, {
                username: username,
                password: password,
                headers: { Authorization: `Token ${token}` }
            })
            .then((res) => {
                // localStorage.setItem("log in", "true");
                localStorage.setItem("auth_token", res.data.auth_token);
                alert("You created a new user! Please log in through the home screen to access all the card features!")
                returnHome("/")
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
            <nav class="navbar is-spaced is-transparent is-medium is-fixed-top is-flex is-justify-content-space-evenly" role="navigation">
                <br />
                <h1 class="title is-2 is-spaced is-centered">Welcome to Gliding Sugar Cards!</h1>
                <Navigation class="navbar-item is-info is-spaced has-dropdown is-hoverable" />
                <br />
            </nav>
            <br />
            <br />
            <br />
            <h1 class="subtitle is-3 is-flex is-aligned-self-center is-spaced ">Create Your Account</h1>
            <br />
            <div>
                <label class="label is-large" htmlFor="username"> Username</label>
                <input
                    id="username"
                    type="text"
                    class="input is-primary is-rounded is-focused is-large"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label class="label is-large" htmlFor="password"> Password</label>
                <input
                    id="password"
                    type="password"
                    class="input is-primary is-rounded is-focused is-large"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <br />
            <button class="button is-primary is-large is-hover" type="submit" onClick={(event) => handleNewUser(event)}>
                {" "}
                Add User
            </button>
            <br />
            <br />
            <br />

            <br />
            {error && <div>{error}</div>}

        </>
    );
}

export default NewUser


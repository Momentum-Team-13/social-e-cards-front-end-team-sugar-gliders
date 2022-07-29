import axios from "axios";
import React, { useState } from "react";
import Navigation from "./navigation";

function NewUser({ baseURL }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const handleNewUser = (event) => {
        event.preventDefault();
        axios
            .post(`${baseURL}auth/users/`, {
                username: username,
                password: password,
            })
            .then((res) => console.log(res))
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
            {/* <form onSubmit={getAuthToken}> */}
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
            {/* </form> */}
            <Navigation />
            {error && <div>{error}</div>}
        </>
    );
}

export default NewUser
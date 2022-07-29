import axios from "axios";
import { useState } from "react";
let baseURL = "https://sg-ecard-api.herokuapp.com/";

function LogIn({}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${baseURL}auth/token/login/`, {
        username: username,
        password: password,
      })
      .then((res) => {
        let auth_token = res.data.auth_token;
        setAuthToken(auth_token);
        console.log(auth_token);
        localStorage.setItem("auth_token", auth_token);
      })
      .catch((res) => {
        let error = res.response.data.non_field_errors;
        setError(error);
      });
  };

  return (
    <>
      <h1>Log in form </h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <form>
        <>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </>

        <button type="submit" onClick={(event) => handleSubmit(event)}>
          {""} Log In
        </button>
      </form>
      {error && <div>{error}</div>}
    </>
  );
}

export default LogIn;

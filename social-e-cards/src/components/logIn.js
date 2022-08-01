


//     useEffect(() => {
//         if (auth) {
//             setAreYouLoggedIn(true)
//             localStorage.setItem("log in", "true")
//             console.log(auth);
//             console.log(areYouLoggedIn)
//             console.log("this is true")

//         } else {
//             console.log("this is false")
//         }
//     }, [areYouLoggedIn, auth, username])

//     return (
//         <>
//             <br />
//             <h1 className="app-name">Gliding Sugar Cards</h1>
//             <br />
//             <Navigation />
//             <br />
//             <h1>Log in form </h1>
//             {error && <div>{error}</div>}
//             <label htmlFor='username'>Username</label>
//             <input type="text"
//                 id='username'
//                 required
//                 value={username}
//                 onChange={(event) => setUsername(event.target.value)}
//             />
//             <form>
//                 <>
//                     <label htmlFor='password'>Password</label>
//                     <input type="text"
//                         id="password"
//                         required
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                     />
//                 </>
//                 <br />
//                 <br />
//                 <button type="submit" onClick={(event) => handleSubmit(event)}> {""} Log In</button>
//             </form>
//             <br />
//             <Navigation />

//             {console.log(areYouLoggedIn)}

//             {areYouLoggedIn ? (
//                 <Navigate to="/" state={{ areYouLoggedIn }} username={{ username }} />)
//                 : (
//                     " "
//                 )}
//         </>
//     );
// }

// export default LogIn

import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Navigation from './navigation'
import 'bulma/css/bulma.min.css';


function LogIn({ auth }, { setAuth }) {
    const [username, setUsername] = useState('')
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
            console.log(token);
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
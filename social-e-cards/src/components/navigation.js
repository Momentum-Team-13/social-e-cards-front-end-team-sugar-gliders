import React, { useEffect } from "react";
import NavigationLink from "./nav-link";
import { useState } from "react";
import LogIn from "./log-in";

function Navigation({ areYouLoggedIn, baseURL }) {
    const [loggedIn, setLoggedIn] = useState("Log In")

    useEffect(() => {
        if (areYouLoggedIn === true) {
            setLoggedIn("Log Out")
            console.log("this is true")
        } else {
            setLoggedIn("Log In")
            console.log("this is false")
        }
    }, [areYouLoggedIn])

    return (
        <>
            <h1>HELLO AGAIN haha</h1>
            {areYouLoggedIn ? (
                <>
                    <NavigationLink text="Profile " link="/auth/users/me/" />
                    <NavigationLink text="Create Cards " link="/create-card/" />
                    <NavigationLink text="Log Out" link="/auth/token/logout/" />
                </>
            ) : (
                <>
                    <LogIn baseURL={baseURL} />
                    {/* <NavigationLink text="Log In" link="/auth/token/login/" /> */}
                    <NavigationLink text="Create Account" link="/auth/users/" />
                </>
            )
            }
        </>
    );
}

export default Navigation

// function Navigation() {
//     const [loggedIn, setLoggedIn] = useState("Log In")
//     const [areYouLoggedIn, setAreYouLoggedIn] = useState(true)

//     return (
//         <>
//             <h1>HELLO AGAIN haha</h1>
//             <button onClick={() => setAreYouLoggedIn(!areYouLoggedIn)}>LOG IN?!</button>
//             {/* <NavigationLink text="Log Out" link="/auth/token/login/" /> */}
//             {areYouLoggedIn ? (
//                 <>
//                     <NavigationLink text="Profile " link="/auth/users/me/" />
//                     <NavigationLink text="Create Cards " link="/create-card/" />
//                     <NavigationLink text="Log Out" link="/auth/token/logout/" />
//                 </>
//             ) : (
//                 <>
//                     <NavigationLink text="Log In" link="/auth/token/login/" />
//                     <NavigationLink text="Create Account" link="/auth/users/" />
//                 </>
//             )
//             }
//         </>
//     );
// }

// export default Navigation


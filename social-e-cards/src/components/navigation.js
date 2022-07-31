import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./logOut";
import "bulma/css/bulma.min.css";

function Navigation() {
  const areYouLoggedIn = localStorage.getItem("log in");
  console.log(areYouLoggedIn);
  return (
    <>
      {areYouLoggedIn ? (
        <>
          <button>
            <Link to={"/"}>Home</Link>
          </button>
          <button>
            <Link to={"/profile"}>Profile</Link>
          </button>
          <button>
            <Link to={"/createCard"}>Create Cards</Link>
          </button>
          <button>
            <Link to={"/follower"}>Following</Link>
          </button>
          <button>
            <Link to={"/gallery"}>Card Gallery</Link>
          </button>
          <LogOut />
        </>
      ) : (
        <>
          <button>
            <Link to={"/"}>Home</Link>
          </button>
          <button>
            <Link to={"/logIn"}>Log In</Link>
          </button>
          <button>
            <Link to={"/newUser"}>Create User</Link>
          </button>
        </>
      )}
    </>
  );
}

export default Navigation;

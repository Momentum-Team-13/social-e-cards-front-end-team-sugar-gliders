import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./logOut";
import "bulma/css/bulma.min.css";
import Profile from "./profile";

function Navigation({ state, handlePersonalProfile }) {
  const areYouLoggedIn = localStorage.getItem("log in");
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="navigation-bar">
        {areYouLoggedIn ? (
          <>
            <button className="nav">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="nav">
              <Link to={"/profile"}>Profile</Link>
            </button>
            <button className="nav">
              <Link to={"/createCard"}>Create Cards</Link>
            </button>
            <button className="nav">
              <Link to={"edit/:cardId"}>Edit Cards</Link>
            </button>
            <button className="nav">
              <Link to={"/following/"}>Following</Link>
            </button>
            <LogOut />
          </>
        ) : (
          <>
            <button className="nav">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="nav">
              <Link to={"/logIn"}>Log In</Link>
            </button>
            <button className="nav">
              <Link to={"/newUser"}>Create User</Link>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Navigation;

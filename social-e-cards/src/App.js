import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";
import "./App.css";
import Navigation from "./components/navigation";
import CreateCard from "./components/createCard";
import Card from "./components/completeCard";
import Follower from "./components/follower";
import Gallery from "./components/galleryCards";
import Home from "./components/home";
import LogIn from "./components/logIn";
import LogOut from "./components/logOut";
import NewUser from "./components/newUser";
import Profile from "./components/profile";
import EditCard  from "./components/EditCard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [bodyText, setBodyText] = useState(true);
  const baseURL = "https://sg-ecard-api.herokuapp.com";

  const setAuth = (username, token) => {
    setToken(token);
    setUsername(username);
  };

  const isLoggedIn = username && token;

  return (
    <BrowserRouter>
      <br></br>
      <Routes>
        <Route
          path="/home"
          element={<Home currentUser={username} token={token} />}
        />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/newUser/" element={<NewUser />} />
        <Route path="/logIn/" element={<LogIn setAuth={setAuth} />} />
        <Route
          path="/profile/"
          element={<Profile token={token} username={username} />}
        />
        <Route
          path="/createCard/"
          element={<CreateCard token={token} username={username} />}
        />
        <Route
          path="/gallery/"
          element={<Gallery currentUser={username} token={token} />}
        />
        <Route
          path="/logOut/"
          element={<LogOut setAuth={setAuth} token={token} />}
        />
        <Route
          path="/following/"
          element={<Follower currentUser={username} token={token} />}
        />
        {/* <Route path="login" element={
                    <header>
                        {isLoggedIn ? (
                            <Navigate to="/home" />
                        ) : (
                            <div className="mainPage">
                                <Navigation
                                    setAuth={setAuth}
                                    token={token}
                                />
                                <Gallery token={token} />
                            </div>
                        )}
                        <NewUser />
                    </header>
                }
                /> */}
        <Route
          path="customize-profile"
          element={
            <div className="mainPage">
              <Navigation setAuth={setAuth} token={token} />
              {/* <CustomizeProfile
                                token={token}
                                username={username}
                                profileImage={profileImage}
                                setProfileImage={setProfileImage}
                            />{" "} */}
            </div>
          }
        />
        <Route
          path="edit-profile/:profilePk"
          element={
            <div className="mainPage">
              <Navigation setAuth={setAuth} token={token} />
              {/* <EditProfile
                                token={token}
                                username={username}


                            />{" "} */}
            </div>
          }
        />
        <Route
          path="cards/:cardId"
          element={
            <div className="mainPage">
              <Navigation setAuth={setAuth} token={token} />
              {/* <CardDetail comments={comments} token={token} /> */}
            </div>
          }
        />
        <Route
          path="edit/:cardId"
          element={
            <div className="mainPage">
              <Navigation setAuth={setAuth} token={token} />
              <EditCard token={token}  />
            </div>
          }
        />
        <Route
          path="editdraft/:draftId"
          element={
            <div className="mainPage">
              <Navigation setAuth={setAuth} token={token} />
              {/* <EditDraft token={token} username={username} /> */}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );

  // return (
  //     <BrowserRouter>
  //         <Pages />
  //     </BrowserRouter>
  // );
}

export default App;

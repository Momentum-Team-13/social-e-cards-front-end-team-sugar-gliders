import { Routes, Route } from "react-router-dom";
import CreateCard from "./components/createCard";
import Follower from "./components/follower";
import Home from "./components/home";
import LogIn from "./components/logIn";
import LogOut from "./components/logOut";
import NewUser from "./components/newUser";
import Profile from "./components/profile";
import Gallery from "./components/galleryCards";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newUser/" element={<NewUser />} />
      <Route path="/logIn/" element={<LogIn />} />
      <Route path="/profile/" element={<Profile />} />
      <Route path="/createCard/" element={<CreateCard />} />
      <Route path="/gallery/" element={<Gallery />} />
      <Route path="/logOut/" element={<LogOut />} />
      <Route path="/follower/" element={<Follower />} />
    </Routes>
  );
}

export default Pages;

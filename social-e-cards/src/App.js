import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/navigation';
import LogIn from './components/log-in';


function App() {
  const [baseURL, setBaseURL] = useState("https://sg-ecard-api.herokuapp.com/");
  const [team, setTeam] = useState("");
  const [message, setMessage] = useState("");
  const [imgLink, setImgLink] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}`).then((res) => {
      let team = res.data.team;
      let message = res.data.description;
      let imgLink = res.data.dank_meme_image;
      setTeam(team);
      setMessage(message);
      setImgLink(imgLink);
    });
  }, [baseURL]);

  return (
    <>
      {/* <div className="container">
        {team && message && imgLink && (
          <div className="from_andres">
            Hello {team}
            <p> <img src={imgLink} alt="dank meme" />{" "}</p>
          </div>
        )}
      </div> */}
      <LogIn baseURL={baseURL} />
      <Navigation baseURL={baseURL} areYouLoggedIn={true} />
    </>
  );
}

export default App;

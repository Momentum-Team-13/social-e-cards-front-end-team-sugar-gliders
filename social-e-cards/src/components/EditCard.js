import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Card from "./completeCard";
import Navigation from "./navigation";
import { TwitterPicker } from "react-color";
import rgbHex from "rgb-hex";
let Token = localStorage.getItem("auth_token");
// import { Link } from "react-router-dom";
// import Select from "react-select";
// import { useParams } from "react-router-dom";

export default function EditCard(username) {
  const [img, setImg] = useState("");
  const [inmessage, setInnerMessage] = useState("");
  const [outmessage, setOuterMessage] = useState("");
  const [color, setColor] = useState("");
  const [userId, setUserId] = useState("");

  const handleEdit = (event) => {
    event.preventDefault();
    axios
      .get(`https://sg-ecard-api.herokuapp.com/ecards/${event.target.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${Token}`,
        },
      })
      .then((res) => {
        setUserId(res.id);
        console.log(res);
        return res;
      });

    axios
      .patch(
        `https://sg-ecard-api.herokuapp.com/ecards/${event.target.id}`,
        {
          card_inner_message: inmessage,
          card_outer_message: outmessage,
          card_image: img,
          card_color: color,
          card_owner: { username },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`,
          },
        }
      )
      .then((res) => {
        setInnerMessage("");
        setOuterMessage("");
        setImg("");
        console.log(username.username);
        return res;
      });
  };
  // const options = {
  //   method: "PATCH",
  //   url: `https://sg-ecard-api.herokuapp.com/ecards/${event.target.id}`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Token ${Token}`,
  //   },
  //   data: {
  //     card_inner_message: inmessage,
  //     card_outer_message: outmessage,
  //     card_image: img,
  //     card_color: color,
  //     card_owner: { username },
  //   },
  // };

  //     axios
  //       .patch(
  //         `https://sg-ecard-api.herokuapp.com/ecards/${event.target.id}`,
  //         {
  //           card_inner_message: inmessage,
  //           card_outer_message: outmessage,
  //           card_image: img,
  //           card_color: color,
  //           card_owner: { username },
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Token ${Token}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         setInnerMessage("");
  //         setOuterMessage("");
  //         setImg("");
  //         console.log(username.username);
  //         return res;
  //       });
  //   };
  // const onImageChange = (e) => {
  //     const [file] = e.target.files;
  //     // setImg(URL.createObjectURL(file));
  // };
  //   const handleEdit = (e) => {
  //     e.preventDefault();
  //     setError("");
  //     const options = {
  //       method: "PATCH",
  //       url: `https://sg-ecard-api.herokuapp.com/ecards/${e.target.id}`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${Token}`,
  //       },
  //       data: {
  //         card_inner_message: inmessage,
  //           card_outer_message: outmessage,
  //           card_image: img,
  //           card_color: color,
  //           card_owner: { username },
  //       },
  //     };

  return (
    <>
      <br />
      <h1 className="app-name">Gliding Sugar Cards</h1>
      <br />
      <Navigation />
      <br />
      <div id="cardform">
        <h2>Customize your card!</h2>
        <br />
        <h3>Step 1: Choose a Color:</h3>
        <br />
        <TwitterPicker
          color={color}
          onChangeComplete={(c) => setColor(rgbHex(c.rgb.r, c.rgb.g, c.rgb.b))}
        />
        <p>You picked {color}</p>
        <form onSubmit={handleEdit}>
          <div className="input-field" id="card-message-field">
            <label htmlFor="message">Step 2: Write an Inner Message:</label>
            <br />
            <input
              type="textarea"
              value={inmessage}
              name="message"
              placeholder="Give your card a message!"
              onChange={(e) => setInnerMessage(e.target.value)}
            />
          </div>
          <div className="input-field" id="card-message-field">
            <label htmlFor="message"> Step 3: Write an Outer Message:</label>
            <br />
            <input
              type="textarea"
              value={outmessage}
              name="message"
              placeholder="Give your card a message!"
              onChange={(e) => setOuterMessage(e.target.value)}
            />
          </div>
          <div>
            <div className="input-field" id="card-image-field">
              <label htmlFor="image"> Step 4: Insert Unsplash URL:</label>
              <br />
              <input
                type="textarea"
                value={img}
                name="image"
                placeholder="Enter URL here!"
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            {/*                         
                        <label htmlFor="message"> Upload an Image:</label>
                        <br />
                        <input type="file" onChange={onImageChange} />
                        <img src={img} alt="" /> */}
          </div>
          <br />
          <button type="submit" id="submit">
            Submit Edit
          </button>
          <br />
        </form>
      </div>
      <br />
      <Navigation />
    </>
  );
}

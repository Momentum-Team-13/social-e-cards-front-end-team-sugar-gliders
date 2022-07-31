import axios from "axios";
import { useState } from "react";
import Navigation from "./navigation";
import { TwitterPicker } from "react-color";
import rgbHex from "rgb-hex";
let Token = localStorage.getItem("auth_token");
console.log(Token);
export default function CreateCard() {
  //   const [image, setImage] = useState("");
  const [inmessage, setInnerMessage] = useState("");
  const [outmessage, setOuterMessage] = useState("");
  const [color, setColor] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inner message", inmessage);
    console.log("outer message", outmessage);

    //get user for post request-why is the id increasing by 1 everytime card is created
    axios
      .get("https://sg-ecard-api.herokuapp.com/auth/users/me/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${Token}`,
        },
      })
      .then((res) => {
        setUserId(res.id);
        console.log(userId);
        return res;
      });

    axios
      .post(
        "https://sg-ecard-api.herokuapp.com/ecards/",
        {
          //dees each card have a specifc id, and/or does each user get an id
          id: userId,
          created_at: "2022-07-28T21:42:30.175271Z",
          updated_at: "2022-07-28T21:42:30.175310Z",
          card_color_list: color.toUpperCase(),
          card_color: null,
          card_inner_message: inmessage,
          card_outer_message: outmessage,
          card_image: "test card image",
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
        // setColor("");
        return res;
      });
  };

  return (
    <>
      <div className="addcard">
        <div id="preview">
          <h2>Card Preview</h2>
          {/* <h3>Title: {title}</h3> */}
          <div className={`background_block ${color}`}>
            {/* <h4>{message}</h4> */}
          </div>
        </div>
      </div>
      <div id="cardform">
        <h2>Customize your card!</h2>
        <TwitterPicker
          color={color}
          onChangeComplete={(c) => setColor(rgbHex(c.rgb.r, c.rgb.g, c.rgb.b))}
        />
        <p>You picked {color}</p>
        <form onSubmit={handleSubmit} id="add-card">
          <div className="input-field" id="card-message-field">
            <label htmlFor="message">Inner Message:</label>
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
            <label htmlFor="message"> Outer Message:</label>
            <br />
            <input
              type="textarea"
              value={outmessage}
              name="message"
              placeholder="Give your card a message!"
              onChange={(e) => setOuterMessage(e.target.value)}
            />
          </div>
          <button type="submit" id="submit">
            Done!
          </button>
        </form>
      </div>
      <Navigation />
    </>
  );
}

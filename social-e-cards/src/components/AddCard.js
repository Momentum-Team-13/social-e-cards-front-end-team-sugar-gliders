import axios from "axios";
import { useState } from "react";

export const AddCard = ({ setSubmitted }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [bgcolor, setBgcolor] = useState("");
  const [msgcolor, setMsgcolor] = useState("");
  const [msgfont, setMsgfont] = useState("sans-serif");

  // Not sure about the ajax request but it should look something like this 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://sg-ecard-api.herokuapp.com"
        {
          title: title,
          outer_message: message,
          public: true,
          outer_color: bgcolor,
          outer_message_color: msgcolor,
          outer_font: msgfont,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setSubmitted(true);
        setTitle("");
        setMessage("");
        setBgcolor("");
        setMsgcolor("");
        setMsgfont("");
        return res;
      });
  };

  return (
    <>
      <div className="addcard">
        <div id="preview">
          <h2>Card Preview</h2>
          <h3>Title: {title}</h3>
            <div
              className={`background_block ${bgcolor} ${msgfont} ${msgcolor}`}
            >
              <h4>{message}</h4>
            </div>
          </div>
        </div>
        <div id="cardform">
          <h2>Customize your card!</h2>
          <form onSubmit={handleSubmit} id="add-card">
            <div className="input-field" id="card-title-field">
              <label htmlFor="title" id="title-label">
                Title:
              </label>
              <br />
              <input
                id="title"
                type="text"
                value={title}
                name="title"
                placeholder="Give your card a title!"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="message-options">
              <div className="input-field" id="card-message-field">
                <label htmlFor="message">Message:</label>
                <br />
                <input
                  type="textarea"
                  value={message}
                  name="message"
                  placeholder="Give your card a message!"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="msgfont">Font type: </label>
                <br />
                <label className="sans-serif">
                  <input
                    type="radio"
                    value="sans-serif"
                    checked={msgfont === "sans-serif"}
                    onChange={(e) => setMsgfont(e.target.value)}
                  />
                  sans serif
                </label>
                <br />
                <label className="serif">
                  <input
                    type="radio"
                    value="serif"
                    checked={msgfont === "serif"}
                    onChange={(e) => setMsgfont(e.target.value)}
                  />
                  serif
                </label>
              </div>
              <div className="bgcolors">
                <label htmlFor="bgcolor">Text background color:</label>
                <br />
                <button
                  type="button"
                  className="pink"
                  value="pink"
                  onClick={(e) => setBgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="blue"
                  value="blue"
                  onClick={(e) => setBgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="green"
                  value="green"
                  onClick={(e) => setBgcolor(e.target.value)}
                ></button>
                <br />
                <button
                  type="button"
                  className="white"
                  value="white"
                  onClick={(e) => setBgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="black"
                  value="black"
                  onClick={(e) => setBgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="purple"
                  value="purple"
                  onClick={(e) => setBgcolor(e.target.value)}
                ></button>
              </div>
              <div id="text-colors">
                <label htmlFor="msgcolor">Text color:</label>
                <br />
                <button
                  type="button"
                  className="pink"
                  value="pink-text"
                  onClick={(e) => setMsgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="blue"
                  value="blue-text"
                  onClick={(e) => setMsgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="green"
                  value="green-text"
                  onClick={(e) => setMsgcolor(e.target.value)}
                ></button>
                <br />
                <button
                  type="button"
                  className="white"
                  value="white-text"
                  onClick={(e) => setMsgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="black"
                  value="black-text"
                  onClick={(e) => setMsgcolor(e.target.value)}
                ></button>
                <button
                  type="button"
                  className="purple"
                  value="purple-text"
                  onClick={(e) => setMsgcolor(e.target.value)}
                ></button>
              </div>
            </div>
            <button type="submit" id="submit">
              Done!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

import { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./navigation";
import { TwitterPicker } from "react-color";
import rgbHex from "rgb-hex";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bulma/css/bulma.min.css';


export default function EditCard() {
    let Token = localStorage.getItem("auth_token");
    const [img, setImg] = useState("");
    const [inmessage, setInnerMessage] = useState("");
    const [outmessage, setOuterMessage] = useState("");
    const [color, setColor] = useState("");
    const [userId, setUserId] = useState("");
    let params = useParams();
    let cardID = params.cardId;
    let navigate = useNavigate();
    const handleEdit = (event) => {
        event.preventDefault();
        axios
            .patch(
                `https://sg-ecard-api.herokuapp.com/ecards/${cardID}`,
                {
                    id: cardID,
                    card_inner_message: inmessage,
                    card_outer_message: outmessage,
                    card_image: img,
                    card_color: color,
                },
                {
                    headers: {
                        Authorization: `Token ${Token}`,
                    },
                }
            )
            .then((res) => {
                setInnerMessage("");
                setOuterMessage("");
                setImg("");
                setUserId(res.id);
                navigate("/profile");
            });
    };

    return (
        <>
            <nav class="navbar is-transparent is-medium is-fixed-top" role="navigation">
                <br />
                <h1 class="title is-2 is-spaced is-centered">Welcome to Gliding Sugar Cards!</h1>
                <Navigation class="navbar-item has-dropdown is-hoverable" />
                <br />
            </nav>
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
                        <label htmlFor="message">Step 2: Write a Message for Outside the Card:</label>
                        <br />
                        <input
                            type="textarea"
                            value={outmessage}
                            name="message"
                            placeholder="Give your card a message!"
                            onChange={(e) => setOuterMessage(e.target.value)}
                        />
                    </div>
                    <div className="input-field" id="card-message-field">
                        <label htmlFor="message"> Step 3: Write a Message for Inside the Card:</label>
                        <br />
                        <input
                            type="textarea"
                            value={inmessage}
                            name="message"
                            placeholder="Give your card a message!"
                            onChange={(e) => setInnerMessage(e.target.value)}
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
                    </div>
                    <br />
                    <button type="submit" id="submit">
                        Submit Edit
                    </button>
                    <br />
                </form>
            </div>
        </>
    );
}
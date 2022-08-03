import axios from "axios";
import { useState } from "react";
import Navigation from "./navigation";
import { TwitterPicker } from "react-color";
import rgbHex from "rgb-hex";
import { Navigate, useNavigate } from "react-router-dom";
let Token = localStorage.getItem("auth_token");

export default function CreateCard(username) {
    const [img, setImg] = useState("");
    const [inmessage, setInnerMessage] = useState("");
    const [outmessage, setOuterMessage] = useState("");
    const [color, setColor] = useState("");
    const [userId, setUserId] = useState("");
    const [cardCreator, setCardCreator] = useState(null);
    const returnProfile = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .get("https://sg-ecard-api.herokuapp.com/auth/users/me/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${Token}`,

                },
            })
            .then((res) => {
                setUserId(res.id);
            });

        axios
            .post(
                "https://sg-ecard-api.herokuapp.com/ecards/",
                {

                    card_inner_message: inmessage,
                    card_outer_message: outmessage,
                    card_image: img,
                    card_color: color,
                    card_owner: { username }
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
                setCardCreator(res.data.card_owner.username)
                returnProfile("/profile/")
            }, [cardCreator]);
    };


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
                <form
                    onSubmit={handleSubmit}
                    id="add-card"
                >
                    <div className="input-field" id="card-message-field">
                        <label htmlFor="message">Step 2: Write a Message for the Outside of the Card:</label>
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
                        <label htmlFor="message"> Step 3: Write a Message for the Inside of the Card:</label>
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
                    <button
                        type="submit"
                        id="submit"
                    >
                        Done!
                    </button>
                    <br />
                </form>

            </div>
            <br />

        </>
    );
}


//card created message upon submit
//clear image after submit like the inner/outer message 
// submit with user id in card create
//call by user id cards created 



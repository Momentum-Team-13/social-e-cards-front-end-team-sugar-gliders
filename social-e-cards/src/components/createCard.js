import axios from "axios";
import { useState } from "react";
import Navigation from "./navigation";
import { TwitterPicker } from "react-color";
import rgbHex from "rgb-hex";
import { Navigate, useNavigate } from "react-router-dom";
import 'bulma/css/bulma.min.css';

export default function CreateCard(username) {
    let Token = localStorage.getItem("auth_token");
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
                returnProfile("/profile")
            }, [cardCreator]);
    };


    return (
        <>
            <section class="hero is-fluid has-background-light">
                <div class="container is-fluid has-background-light">
                    <nav class="navbar is-spaced is-transparent is-medium is-fixed-top is-flex is-justify-content-space-evenly" role="navigation">
                        <br />
                        <h1 class="title is-2 is-spaced is-centered">Welcome to Gliding Sugar Cards!</h1>
                        <Navigation class="navbar-item has-dropdown is-hoverable" />
                        <br />
                    </nav>
                    <section class="hero has-background-light">
                        <div id="cardform">
                            <h2 class="subtitle is-3 is-flex is-aligned-self-center is-spaced ">Customize your card!</h2>
                            <br />
                            <h3 class="subtitle is-3 is-flex is-aligned-self-center is-spaced ">Step 1: Choose a Color:</h3>
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
                                    <label class="subtitle is-3 is-flex is-aligned-self-center is-spaced "
                                        htmlFor="message">Step 2: Write a Message for the Outside of the Card:
                                    </label>
                                    <input
                                        type="textarea"
                                        value={outmessage}
                                        name="message"
                                        class="input is-link is-rounded is-focused is-medium"
                                        placeholder="Give your card a message!"
                                        onChange={(e) => setOuterMessage(e.target.value)}
                                    />
                                </div>
                                <br />
                                <div className="input-field" id="card-message-field">
                                    <label class="subtitle is-3 is-flex is-aligned-self-center is-spaced "
                                        htmlFor="message"> Step 3: Write a Message for the Inside of the Card:
                                    </label>
                                    <input
                                        type="textarea"
                                        value={inmessage}
                                        name="message"
                                        placeholder="Give your card a message!"
                                        class="input is-link is-rounded is-focused is-medium"
                                        onChange={(e) => setInnerMessage(e.target.value)}
                                    />
                                </div>
                                <br />
                                <div>
                                    <div className="input-field" id="card-image-field">
                                        <label class="subtitle is-3 is-flex is-aligned-self-center is-spaced "
                                            htmlFor="image"> Step 4: Insert Unsplash URL:</label>
                                        <input
                                            type="textarea"
                                            value={img}
                                            name="image"
                                            placeholder="Enter URL here!"
                                            class="input is-link is-rounded is-focused is-medium"
                                            onChange={(e) => setImg(e.target.value)}
                                        />
                                    </div>
                                    <br />
                                </div>
                                <br />
                                <button
                                    class="button is-link is-large is-rounded"
                                    type="submit"
                                    id="submit"
                                >
                                    Done!</button>
                                <br />
                            </form>
                        </div>
                    </section>
                    <br />
                </div>
            </section>
        </>
    );
}

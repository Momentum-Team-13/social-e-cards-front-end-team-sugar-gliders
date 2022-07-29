import axios from "axios";
import { useState } from "react";
import Navigation from "./navigation";
let Token = localStorage.getItem("auth_token");
export default function CreateCard() {
    //   const [image, setImage] = useState("");
    const [inmessage, setInnerMessage] = useState("");
    const [outmessage, setOuterMessage] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inner message", inmessage);
        console.log("outer message", outmessage);

        axios
            .post(
                "https://sg-ecard-api.herokuapp.com/ecards/",
                {
                    card_color_list: "00FF00",
                    card_inner_message: inmessage,
                    card_outer_message: outmessage,
                    card_image: "test card image",
                    card_owner: 1,
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
                setColor("");
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






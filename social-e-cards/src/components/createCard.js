import axios from "axios";
import { useState } from "react";
import Navigation from "./navigation";
import { TwitterPicker } from "react-color";
import rgbHex from "rgb-hex";
let Token = localStorage.getItem("auth_token");
export default function CreateCard() {
    const [img, setImg] = useState("");
    const [inmessage, setInnerMessage] = useState("");
    const [outmessage, setOuterMessage] = useState("");
    const [color, setColor] = useState("");
    const [userId, setUserId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inner message", inmessage);
        console.log("outer message", outmessage);
        console.log(Token);
        console.log(color);
        axios
            .get("https://sg-ecard-api.herokuapp.com/auth/users/me/", {
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
            .post(
                "https://sg-ecard-api.herokuapp.com/ecards/",
                {
                    //dees each card have a specifc id, and/or does each user get an id
                    // id: userId, --> card ID is auto created 
                    // card_owne in API call not working 
                    // created_at: "2022-07-28T21:42:30.175271Z",
                    // updated_at: "2022-07-28T21:42:30.175310Z",
                    // card_color_list: "#00FF00",
                    // card_color: null,
                    card_inner_message: inmessage,
                    card_outer_message: outmessage,
                    card_image: img,
                    card_color: color,
                    // card_owner: "hello",
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
    // const onImageChange = (e) => {
    //     const [file] = e.target.files;
    //     // setImg(URL.createObjectURL(file));
    // };


    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
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
                    <div>
                        <div className="input-field" id="card-image-field">
                            <label htmlFor="image"> Insert Unsplash URL:</label>
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
                        Done!
                    </button>
                    <br />
                </form>
            </div>
            <br />
            <Navigation />
        </>
    );
}


//card created message upon submit
//clear image after submit like the inner/outer message 
// submit with user id in card create
//call by user id cards created 



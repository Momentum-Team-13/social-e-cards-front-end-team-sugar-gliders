import Card from "./completeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "./css/card.css"
import Navigation from "./navigation";
import "bulma/css/bulma.min.css";


const Gallery = () => {
    let token = localStorage.getItem("auth_token");
    const [cards, setCards] = useState(null);

    useEffect(() => {
        axios
            .get("https://sg-ecard-api.herokuapp.com/ecards/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => setCards(res.data));
    }, [setCards]);

    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
            <div className="gallery_container">
                <header className="App-header">
                    <h1>Welcome Greeter!!</h1>
                </header>
                <div className="cards_container">
                    <div className="card_grid">
                        {cards &&
                            cards.map((card, index) => {
                                return (
                                    <Card
                                        id={card.id}
                                        color={card.card_color}
                                        key={index}
                                        // msgfont={card.outer_font}
                                        outmessage={card.card_outer_message}
                                        inmessage={card.card_inner_message}
                                        img={card.card_image}
                                        owner={false}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>

            <br />
        </>
    );
};
export default Gallery;

//delete navigation from the card component 
// add in who created the card to pass data
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import "../AddCard.css";

const Gallery = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    axios
      .get("https://sg-ecard-api.herokuapp.com", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => setCards(res.data));
  }, [setCards]);

  return (
    <div className="gallery_container">
      <header className="App-header">
        <h1>Welcome Greeter!!</h1>
      </header>
      {cards &&
        cards.map((card) => {
          return (
            <div className="cards_container">
              <div className="card_container">
                <Card
                  key={card.pk}
                  title={card.title}
                  bgcolor={card.outer_color}
                  msgfont={card.outer_font}
                  message={card.outer_message}
                  msgcolor={card.outer_message_color}
                  creator={card.author}
                  created={card.date_created}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;

import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Card.css";

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
              <div className="card_grid">
                <Card
                  key={card.pk}
                  color={card.color}
                  // msgfont={card.outer_font}
                  outmessage={card.outer_message}
                  inmessage={card.inner_message}
                  // image={card.image}
                  // creator={card.author}
                  // created={card.date_created}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;

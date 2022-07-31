import Card from "./completeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "./css/card.css";
import Navigation from "./navigation";
let token = localStorage.getItem("auth_token");

const Gallery = () => {
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
    <div className="gallery_container">
      <header className="App-header">
        <h1>Welcome Greeter!!</h1>
        <Navigation />
      </header>
      <div className="cards_container">
        <div className="card_grid">
          {cards &&
            cards.map((card, index) => {
              return (
                <Card
                  id={card.id}
                  color={card.card_color_list}
                  key={index}
                  // msgfont={card.outer_font}
                  outmessage={card.card_outer_message}
                  inmessage={card.card_inner_message}
                  // image={card.image}
                  // creator={card.author}
                  // created={card.date_created}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

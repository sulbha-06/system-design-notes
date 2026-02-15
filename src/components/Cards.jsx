import React from "react";
import "./cards.css";

function Cards({ meme }) {
  return (
    <div className="cards">
      <img className="cards-image" src={meme.url} alt={meme.name} />
      <h1>{meme.name}</h1>
      <p>This is a card component.</p>
    </div>
  );
}

export default Cards;

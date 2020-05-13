import React from "react";
import "./Card.css";

let Card = props => {
  return (
    <div className="bigOlCardList">
      {props.cards.map(card => (
        <div className="bigOlCard" key={card.id}>
          <h2>{card.firstName}</h2>
          <h2>{card.lastName}</h2>
          <p>{card.email}</p>
          <p>{card.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;

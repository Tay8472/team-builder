import React, { useState } from "react";
import "./CardForm.css";

let CardForm = (props) => {
  let [card, setCard] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
  });

  let changer = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  return (
    <form
      className="formStuff"
      onSubmit={(event) => {
        event.preventDefault();
        props.addCard(card);
        setCard({id: Date.now(), firstName:"", lastName:"", email:"", bio:""})
      }}
    >
      <label className="spacer" htmlFor="fn">
        First Name:
      </label>
      <input
        className="spacer"
        id="firstName"
        type="text"
        name="firstName"
        placeholder="First Name here"
        value={card.firstName}
        onChange={changer}
      />
      <label className="spacer" htmlFor="ln">
        Last Name:
      </label>
      <input
        className="spacer"
        id="lastName"
        type="text"
        name="lastName"
        placeholder="Last Name here"
        value={card.lastName}
        onChange={changer}
      />
      <br />
      <label className="eSpacer" htmlFor="email">
        Email:
      </label>
      <input
        className="eSpacer"
        id="email"
        type="email"
        name="email"
        placeholder="Email here"
        value={card.email}
        onChange={changer}
      />
      <br />
      <label className="taSpacer" htmlFor="textArea">
        Bio:
      </label>
      <textarea
        className="taSpacer"
        id="bio"
        type="text"
        name="bio"
        placeholder="Bio Here"
        value={card.bio}
        onChange={changer}
      />
      <br />
      <button className="buttonStuff" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CardForm;

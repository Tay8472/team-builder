import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./Components/Card";
import CardForm from "./Components/CardForm";

function App() {

  let [cards, setCards] = useState([
    {
      id: 1,
      firstName: "firstName",
      lastName: "lastName",
      email: "this@this.com",
      bio: "stuff"
    }
  ]);

  let addCard = (newCards) => {
    setCards([...cards, newCards])
  }

  return (
    <div className="App">
      <header className="headerJuan">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>REACT ROSTER</h1>
      </header>
      <body className="mainBody">
        <CardForm addCard={addCard}/>
        <hr/>
        <Card cards={cards}/>
      </body>
    </div>
  );
}

export default App;

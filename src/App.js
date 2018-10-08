import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GenerateQuote from "./GenerateQuote";
import DisplayQuote from "./DisplayQuote";

const sampleQuote = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on,
      rotate: false,
      quote: sampleQuote
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote: data[0]
        });
      });
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const working = this.state.on ? "don't work" : "work";
    const rotate = this.state.on ? "App-logo-rotate" : "App-logo";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={rotate} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div>
            <img
              src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
              alt="Homer"
            />
            <h2>Homer Simpson</h2>
            <button onClick={this.handleClick} className={working}>
              {working.toUpperCase()}
            </button>
          </div>
        </div>
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quotes={this.state.quote} />
      </div>
    );
  }
}

export default App;

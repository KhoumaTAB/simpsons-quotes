import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on,
      rotate: false
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const working = this.state.on ? "don't work" : "work";
    const rotate = this.state.on ? "App-logo-rotate" : "App-logo"

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={rotate} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
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
        </p>
      </div>
    );
  }
}

export default App;

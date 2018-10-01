import React, { Component } from "react";

class Working extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const working = this.state.on ? "work" : "don't work";
    return (
      <div className="Working">
        <button onClick={this.handleClick} className={working}>
          {working.toUpperCase()}
        </button>
        <figure className={working} />
      </div>
    );
  }
}

export default Working;

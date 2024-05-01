// App.js
import React, { Component } from "react";
import "./App.css";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="app">
        <h1>Counter App - Using class based components</h1>
        <p className="count">Count: {count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;

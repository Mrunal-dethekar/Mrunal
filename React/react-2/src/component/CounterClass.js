import React, { Component } from "react";
import imag from '../Image/passport.jpg'

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter : prevState.counter + 1
    }))
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  increment3Counter = () =>{
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
  }

  render() {
    return (
      <>
        <h1 style={{ fontSize: "10em" }}>{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button><br/><br/>
        <button onClick={this.decrementCounter}>Decrement</button><br/><br/>
        <button onClick={this.increment3Counter}>Increment 3</button>
        <img src={imag} alt="passport" />
      </>
    );
  }
}

export default CounterClass;

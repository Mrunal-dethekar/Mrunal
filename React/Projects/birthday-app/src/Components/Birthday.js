import React, { Component } from "react";
import data from "../Resources/data";
import List from "../Components/List";

class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    };
    this.clearAll = this.clearAll.bind(this)
  }

  clearAll(){
    this.setState({ people : [] })
  }
  render() {
    return (
      <main>
        <section className="container">
          <h3>{this.state.people.length} Birthdays Today</h3>
          <List people={this.state.people} />
          <button onClick={this.clearAll}>Clear All</button>
        </section>
      </main>
    );
  }
}

export default Birthday;

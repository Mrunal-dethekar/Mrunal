import React, { Component } from "react";

// class HelloClass extends Component {  
// or we can write React.component and delete it from import

//   render() {
//     return (
//       <h1>Hello class {this.props.heading}</h1>
//     );
//   }
// }

class HelloClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greetTo: "World",
      greetAlsoTo: "Australia",
    };
  }

  changeGreetTo = () => {
    this.setState({
      greetTo: "India",
      greetAlsoTo: "USA",
    });
  };

  render() {
    const { greetTo, greetAlsoTo } = this.state;
    return (
      <>
        <h1>
          Hello class {greetTo} and {greetAlsoTo}
        </h1> <br />
          <button onClick={this.changeGreetTo}>Change State</button>
      </>
    );
  }
}

export default HelloClass;

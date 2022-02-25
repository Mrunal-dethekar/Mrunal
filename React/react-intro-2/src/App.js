import "./App.css";
// import Hello from "./component/HelloWorld";
import HelloClass from "./component/HelloClass";
import  React, { Component } from "react";

class App extends Component{
  render(){
  return (
    <>
      {/* <Hello heading="India" heading2="MH" />
      <Hello heading="Africa" />
      <Hello heading="USA" /> */}
      <HelloClass />
    </>
  );
}
}
export default App;

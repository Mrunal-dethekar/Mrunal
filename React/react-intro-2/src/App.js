import "./App.css";
// // import Hello from "./component/HelloWorld";
// import HelloClass from "./component/HelloClass";
import  React, { Component } from "react";
// import CounterClass from "./component/CounterClass";
// import CollegeStudent from "./component/CollegeStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapBasics from "./component/BootstrapBasics";

class App extends Component{
  render(){
  return (
    <div>
     <BootstrapBasics />
      {/* <Hello heading="India" heading2="MH" />
      <Hello heading="Africa" />
      <Hello heading="USA" /> */}
      {/* <HelloClass /> */}
      {/* <CounterClass /> */}
      {/* <CollegeStudent /> */}
    </div>
  );
}
}
export default App;

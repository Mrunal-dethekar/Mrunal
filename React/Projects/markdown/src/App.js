import React from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "mrunal",
    };
  }

  textChange(){
    this.setState((e)=>{
      markdown: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <textarea onChange={this.textChange}/>
        <ReactMarkdown children={this.state.markdown} />
      </div>
    );
  }
}
export default App;

import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      tours : []
    }
  }

  async fetchdata(){
    try{
      const response = (await fetch()).json
      this.setState({ tours : response })
    }catch(err){
      console.log(err)
    }
  }

  componentDidMount(){
    this.fetchdata()
  }

  render() {
    return (
      <div>App</div>
    )
  }
}

export default App

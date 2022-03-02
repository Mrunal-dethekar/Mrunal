import React, { Component } from 'react'
import './App.css';
import Tabs from './Components/Tabs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabsName : ['Home', 'About', 'Features']
    }
  }
  render() {
    return (
      <div className='app'>
        <div className='browser'>
            <Tabs tabNames={this.state.tabsName}/>
          <div className="viewport">Pages Go Here
          </div>
        </div>
         
      </div>
    )
  }
}

export default App

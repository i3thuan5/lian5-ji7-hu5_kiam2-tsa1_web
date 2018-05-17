import React, { Component } from 'react';
import { 請求書寫檢查 } from './utils/請求';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let 漢字 = null;
    let 臺羅 = null;
    console.log('請求書寫檢查=', 請求書寫檢查);
    請求書寫檢查(漢字, 臺羅).then(data => {
      console.log('data=', data);
      this.setState({...data});
    })
    //e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App;

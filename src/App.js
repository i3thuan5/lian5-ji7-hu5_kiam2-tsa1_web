import React, { Component } from 'react';
import { 請求書寫檢查 } from './utils/請求';
import 顯示結果 from './utils/顯示結果';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {結果: null};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let 漢字 = null;
    let 臺羅 = null;
    請求書寫檢查(漢字, 臺羅).then(data => this.setState({...data}));
  }

  handleAjaxSuccess(data) {
    this.setState({...data});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>click</button>
        <顯示結果 結果={this.state.結果}/>
      </div>
    );
  }
}

export default App;

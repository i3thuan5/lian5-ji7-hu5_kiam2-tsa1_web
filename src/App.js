import React, { Component } from 'react';
import { Layout, MainSection } from 'demo-ui';
import { 請求書寫檢查 } from './utils/請求';
import KiatKo from './utils/顯示結果';
import Iapkha from './utils/頁腳';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {結果: null};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let 漢字 = this.refHan.value;
    let 臺羅 = this.refLo.value;
    請求書寫檢查(漢字, 臺羅).then(data => this.setState({...data}));
  }

  handleAjaxSuccess(data) {
    this.setState({...data});
  }

  render() {
    let 正在查詢 = false;
    return (
      <Layout>
        <MainSection>
          <form className='ui form'
           onSubmit={this.handleClick}>

            <div className="app block">
              <textarea
              ref={(c) => { this.refHan = c; }}
              rows='3' 
              placeholder={
                '欲檢查書寫的臺羅傳統調、臺羅數字調、'+
                '白話字傳統調、白話字數字調、漢羅'
              }/>
              <textarea
              ref={(c) => { this.refLo = c; }}
              rows='3' 
              placeholder={
                '欲檢查書寫的臺羅傳統調、臺羅數字調、'+
                '白話字傳統調、白話字數字調、漢羅'
              }/>
            </div>

            <div className="app clearing">
              <button className={
                `ui huge primary right floated button ${
                正在查詢 ? "disabled" : ""}`}
                type='submit'
              >檢查</button>
            </div>
          </form>

          <KiatKo 結果={this.state.結果}/>
        </MainSection>
        <Iapkha/>
      </Layout>
    );
  }
}

export default App;

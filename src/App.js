import React, { Component } from 'react';
import { Layout, MainSection } from 'demo-ui';
import { 請求書寫檢查 } from './utils/請求';
import KiatKo from './utils/顯示結果';
import Iapkha from './utils/頁腳';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {結果: null, 漢字: null, 臺羅: null};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeHan(e) {
    this.setState({漢字: e.target.value});
  }

  handleChangeLo(e) {
    this.setState({臺羅: e.target.value});
  }

  handleSubmit(e) {
    // e.preventDefault();
    let { 漢字, 臺羅 } = this.state;
    if(漢字 && 臺羅){
      請求書寫檢查(漢字, 臺羅).then(data => this.setState({...data}));
    }
  }

  render() {
    let 正在查詢 = false;
    return (
      <Layout>
        <MainSection>
          <form className='ui form'
           onSubmit={this.handleSubmit}>

            <div className="app block">
              <textarea
              onChange={this.handleChangeHan}
              rows='3' 
              placeholder={
                '欲檢查書寫的臺羅傳統調、臺羅數字調、'+
                '白話字傳統調、白話字數字調、漢羅'
              }/>
              <textarea
              onChange={this.handleChangeLo}
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

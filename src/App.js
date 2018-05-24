import React, { Component } from 'react';
import { Layout, MainSection } from 'demo-ui';
import { 請求書寫檢查, 請求對齊章物件 } from './utils/請求';
import KiatKo from './utils/顯示結果';
import TshingKiuSitPai from './utils/請求失敗訊息';
import TsaSung from './utils/查詢';
import Iapkha from './utils/頁腳';
import SuehBin from './utils/說明';
import 'semantic-ui-css/components/message.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      結果: null,
      漢字: '食著較安心。',
      臺羅: 'tsia̍h tio̍h khah an-sim.',
      正在查詢: false,
      對齊失敗: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeHan = this.handleChangeHan.bind(this);
    this.handleChangeLo = this.handleChangeLo.bind(this);
  }

  handleChangeHan(e) {
    this.setState({漢字: e.target.value});
  }

  handleChangeLo(e) {
    this.setState({臺羅: e.target.value});
  }

  setSearching() {
    this.setState({正在查詢: true});
  }

  unsetSearching() {
    this.setState({正在查詢: false});
  }

  clearErrorInfo() {
    this.setState({對齊失敗: null});
  }

  showErrorInfo(err) {
    this.setState({對齊失敗: err});
  }

  handleSubmit(e) {
    e.preventDefault();
    let { 漢字, 臺羅 } = this.state;
    if(漢字 && 臺羅){

      this.setSearching();
      this.clearErrorInfo();
console.log('sui2');
      return 請求對齊章物件(漢字, 臺羅)
      .then(請求書寫檢查)
      .then(data => {
          this.setState(data);
          this.unsetSearching();
      })
      .catch(error => {
        console.log('catch error', error)
          this.showErrorInfo(error);
          this.unsetSearching();
      });
    }
  }

  render() {
    let { 正在查詢, 漢字, 臺羅, 結果, 對齊失敗 } = this.state;
    return (
      <Layout>
        <MainSection>
          <TsaSung
            onSubmit={this.handleSubmit}
            onChangeHan={this.handleChangeHan}
            onChangeLo={this.handleChangeLo}
            正在查詢={正在查詢}
            Han={漢字}
            Lo={臺羅}
          />
          <KiatKo 結果={結果}/>
          {
            對齊失敗 ? <TshingKiuSitPai 訊息={對齊失敗}/>
            : null
          }
          <SuehBin/>
        </MainSection>
        <Iapkha/>
      </Layout>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Layout, MainSection } from 'demo-ui';
import { 請求書寫檢查 } from './utils/請求';
import KiatKo from './utils/顯示結果';
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
      漢字: '媠媠媠',
      臺羅: 'sui2sui2sui2',
      正在查詢: false
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

  handleSubmit(e) {
    e.preventDefault();
    let { 漢字, 臺羅 } = this.state;
    if(漢字 && 臺羅){
      this.setSearching();
      請求書寫檢查(漢字, 臺羅)
        .then(data => {
          this.setState({...data});
          this.unsetSearching();
      });
    }
  }

  render() {
    return (
      <Layout>
        <MainSection>
          <TsaSung
            onSubmit={this.handleSubmit}
            onChangeHan={this.handleChangeHan}
            onChangeLo={this.handleChangeLo}
            正在查詢={this.state.正在查詢}
            Han={this.state.漢字}
            Lo={this.state.臺羅}
          />
          <KiatKo 結果={this.state.結果}/>
          <SuehBin/>
        </MainSection>
        <Iapkha/>
      </Layout>
    );
  }
}

export default App;

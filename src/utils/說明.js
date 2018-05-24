import React from 'react';
import { Block } from 'demo-ui';

class 說明 extends React.PureComponent {

render(){
  return (
    <div className="ui info message">
      <div className="header">臺語書寫連字符檢查器說明</div>
      <Block>
        <div className="ui text container">
        <p>參考臺羅連字符規範，提示可能發生錯誤書寫的所在。</p>
        <p>食著較安心。</p>
        <p>tsia̍h tio̍h khah an-sim.</p>
        <div className="ui negative compact message">
        <p>2，前：E動詞（二）</p>
        </div>
        <p>第2个字的頭前，應該寫做『tsia̍h-tio̍h』。參考自動詞（二）規範。</p>
      </div>
      </Block>
    </div>
  );
}}

export default 說明;

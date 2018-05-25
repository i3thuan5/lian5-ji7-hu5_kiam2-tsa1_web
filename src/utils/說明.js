import React from 'react';
import { Block } from 'demo-ui';

class 說明 extends React.PureComponent {

render(){
  return (
<div className="ui info message">
  <div className="header">臺語書寫連字符檢查器說明</div>
  <Block>
    <div className="ui basic segment">
      <p>根據<a href="http://ws.moe.edu.tw/001/Upload/FileUpload/3677-15601/Documents/lanclassify.pdf"
      target="_blank"
      without rel="noopener noreferrer">臺羅連字符使用分類說明</a>
      ，提示可能發生錯誤書寫的所在。</p>
      <p>食著較安心。<br/>
        Tsia̍h tio̍h khah an-sim.<br/>
      </p>
      <div className="ui negative compact message">
        <p>2，前：E動詞（二）</p>
      </div>
      <p>檢查器會提示，根據動詞（二）原則，第2个字『tio̍h』的頭前應該愛連寫做『Tsia̍h-tio̍h』。</p>
      <p>目前支援的連字符檢查原則：</p>
      <ul>
        <li>名詞原則：一詞綴、二序列詞、三方位詞、五詞綴阿</li>
        <li>動詞原則：一環綴、二時貌、三補語</li>
        <li>虛詞：一介詞、二連詞、三結構助詞、四嘆詞、五語尾助詞</li>
      </ul>
    </div>
  </Block>
</div>
  );
}}

export default 說明;

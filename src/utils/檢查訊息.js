import React from 'react';


class 檢查訊息 extends React.PureComponent {

render(){
  let { 二維訊息 } = this.props;

  if(!二維訊息 || !二維訊息.length)
    return null;

  return (
     <div className="ui negative message">
      {
        //2，前：E動詞（二）
        二維訊息.map(([規範, 逝號, 前後], key) =>
          <p key={key}>{逝號}，{前後}：{規範}</p>
        )
      }
     </div>
  );
}}


export default 檢查訊息;

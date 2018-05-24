import React from 'react';
import { Block } from 'demo-ui';
import TshoNgoo from './錯誤訊息組';
import TshingKiuSitPai from './請求失敗訊息';

class 顯示結果 extends React.PureComponent {

render(){
  let {結果} = this.props;
  return (
    <div>
    {
      結果 ? 結果.map((item, key) => {
        return(
        <Block key={key}>
          <div className="result ui text container">
            <p className='resultline'>{item.漢字}</p>
            <p className='resultline'>{item.臺羅}</p>
          {
            item.請求失敗 ? <TshingKiuSitPai 訊息={item.請求失敗}/>
            : null
          }
          {
            item.檢查 ? <TshoNgoo 訊息陣列={item.檢查}/>
            : null
          }
          </div>
        </Block>
        )}
      ) : null
    }
    </div>
  );
}};

export default 顯示結果;

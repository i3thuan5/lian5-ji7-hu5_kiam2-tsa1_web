import React from 'react';
import { Block } from 'demo-ui';
import 錯誤訊息組 from './錯誤訊息組';

const 顯示結果 = ({結果}) => {
  return (
    <div>
    {
      結果 ? 結果.map((item, key) =>
        <Block key={key}>
          <div className="result ui text container">
            <p className='resultline'>{item.漢字}</p>
            <p className='resultline'>{item.臺羅}</p>
          {
            item.檢查 ? <錯誤訊息組 訊息陣列={item.檢查}/>
            : null
          }
          </div>
        </Block>
      ) : null
    }
    </div>
  );
};

export default 顯示結果;

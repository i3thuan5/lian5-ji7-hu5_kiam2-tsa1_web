import React from 'react';

const 顯示結果 = ({結果}) => {
  return (
    <div>
    {
      結果 ? 結果.map((item, key) =>
        <p key={key}>
          <span>{item.漢字}{item.臺羅}</span>
          <span>{item.檢查}</span>
        </p>
      ) : null
    }
    </div>
  );
};

export default 顯示結果;
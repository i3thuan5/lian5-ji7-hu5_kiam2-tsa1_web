import React from 'react';


const 錯誤訊息組 = ({訊息陣列}) => {
  if(!訊息陣列 || !訊息陣列.length)
    return null;

  return (
     <div className="ui negative message">
      {
        訊息陣列.map((訊息, key) =>
          <p key={key}>{訊息}</p>
        )
      }
     </div>
)};


export default 錯誤訊息組;

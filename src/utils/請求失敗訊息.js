import React from 'react';

class 請求失敗訊息 extends React.PureComponent {
render() {
return(
  <div className="ui warning message">
    <p>{this.props.訊息}</p>
  </div>
);
}}

export default 請求失敗訊息;
import React from 'react';


class 查詢 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <form className='ui form'
        onSubmit={this.props.onSubmit}>

        <div className="app block">
          <textarea
            onChange={this.props.onChangeHan}
            rows='3'
            placeholder={
              '欲檢查書寫的臺羅傳統調、臺羅數字調、'+
              '白話字傳統調、白話字數字調、漢羅'
            }
            defaultValue={this.props.Han}/>

          <textarea
            onChange={this.props.onChangeLo}
            rows='3'
            placeholder={
              '欲檢查書寫的臺羅傳統調、臺羅數字調、'+
              '白話字傳統調、白話字數字調、漢羅'
             }
            defaultValue={this.props.Lo}/>
        </div>

        <div className="app clearing">
          <button className={
          `ui huge primary right floated button ${
          this.props.正在查詢 ? "disabled" : ""}`} type='submit'>檢查</button>
        </div>

</form>
    );
  }
}

export default 查詢;

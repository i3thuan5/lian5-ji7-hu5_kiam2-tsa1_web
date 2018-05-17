jest.mock('./utils/請求');

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { 請求書寫檢查 } from './utils/請求';
import 顯示結果 from './utils/顯示結果';


beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  請求書寫檢查.mockClear();
});


it('renders without crashing', () => {
  shallow(<App />);
});


//設計上是，輸入的漢字臺羅會存進state，再讀取state送出ajax。
//ajax回傳的結果會顯示在頁面下方。

it('按下去之後呼叫ajax', () => {
  const wrapper = shallow(<App />);
  //fake input handleChange
  wrapper.setState({漢字: '漢', 臺羅: 'lo'});
  //simulate onSubmit event
  wrapper.find('form').first().simulate('submit');
  
  expect(請求書寫檢查).toBeCalledWith('漢', 'lo');
});


it('ajax回來更新state書寫檢查', async () => {
  const wrapper = shallow(<App/>);
  //fake input handleChange
  wrapper.setState({漢字: '漢', 臺羅: 'lo'});
  //wait for ajax returned
  await wrapper.find('form').first().simulate('submit');
  //get new state
  wrapper.update();

  expect(wrapper.state().結果).toEqual(
    [{漢字: '漢', 臺羅: 'lo', 檢查: ''}]
  );
});


it('state傳給小孩', () => {
  const wrapper = shallow(<App/>);
  //fake ajax returned value
  wrapper.setState({結果: [{}]});
  expect(wrapper.find(顯示結果).props()).toEqual(
    {結果: [{}]}
  );
})
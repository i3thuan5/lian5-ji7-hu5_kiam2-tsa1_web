jest.mock('./utils/請求');

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { 請求書寫檢查, 請求對齊章物件 } from './utils/請求';
import 顯示結果 from './utils/顯示結果';
import TshingKiuSitPai from './utils/請求失敗訊息';


beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  請求書寫檢查.mockClear();
});


it('renders without crashing', () => {
  shallow(<App />);
});


//設計上是，輸入的漢字臺羅會存進state，再讀取state送出ajax。
//ajax回傳的結果會顯示在頁面下方。

it('按下去之後呼叫ajax', async () => {
  const wrapper = shallow(<App />);
  //fake input handleChange
  wrapper.setState({漢字: '漢a', 臺羅: 'lo'});
  //simulate onSubmit event
  await wrapper.instance().handleSubmit({preventDefault: jest.fn()});

  expect(請求對齊章物件).toBeCalledWith('漢a', 'lo');
  expect(請求書寫檢查).toBeCalled();
});


it('ajax回來更新state書寫檢查', async () => {
  const wrapper = shallow(<App/>);
  //fake input handleChange
  wrapper.setState({漢字: '漢b', 臺羅: 'lo'});
  await wrapper.instance().handleSubmit({preventDefault: jest.fn()});
  //force re-render
  wrapper.update();

  expect(wrapper.state().結果).toEqual(
    [{漢字: '漢b', 臺羅: 'lo', 檢查: []}]
  );
});


it('書寫檢查傳給小孩', () => {
  const wrapper = shallow(<App/>);
  //fake ajax returned value
  wrapper.setState({結果: [{}]});
  expect(wrapper.find(顯示結果).props()).toEqual(
    {結果: [{}]}
  );
})



it('state存請求對齊失敗', async () => {
  const wrapper = shallow(<App/>);
  
  wrapper.setState({漢字: 'ccc', 臺羅: 'lo'});
  await wrapper.instance().handleSubmit({preventDefault: jest.fn()});
  wrapper.update();
  
  expect(wrapper.state().對齊失敗).toEqual('對齊失敗');
});


it('顯示請求對齊失敗', async () => {
  const wrapper = shallow(<App/>);
  
  wrapper.setState({漢字: 'ccc', 臺羅: 'lo'});
  await wrapper.instance().handleSubmit({preventDefault: jest.fn()});
  wrapper.update();
  
  expect(wrapper.find(TshingKiuSitPai).length).toEqual(1);
});
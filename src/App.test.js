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


it('按下去之後呼叫ajax', () => {
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');
  expect(請求書寫檢查).toBeCalled();
});


it('ajax回來更新state書寫檢查', async () => {
  const wrapper = shallow(<App/>);
  await wrapper.find('button').simulate('click');
  wrapper.update();
  expect(wrapper.state()).toEqual({
    結果: [{漢字: '漢字', 臺羅: '臺羅', 檢查: 'pass'}]
  });
});

it('state傳給小孩', () => {
  const wrapper = shallow(<App/>);
  wrapper.setState({結果: [{}]});
  expect(wrapper.find(顯示結果).props()).toEqual(
    {結果: [{}]}
  );
})
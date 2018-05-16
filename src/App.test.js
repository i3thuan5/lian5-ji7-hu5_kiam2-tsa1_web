import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { 請求書寫檢查 } from './utils/請求';
jest.mock('./utils/請求');


beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  請求書寫檢查.mockClear();
});


it('renders without crashing', () => {
  shallow(<App />);
});


it('按下去之後送ajax', () => {
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');
  expect(請求書寫檢查).toBeCalled();
});

// it('更新state書寫檢查')

// it('state傳給顯示結果')
import React from 'react';
import { shallow } from 'enzyme';
import TsaSung from './查詢';

it('正在查詢時鎖住按鈕', ()=>{
  const wrapper = shallow(<TsaSung 正在查詢={true}/>);
  expect(wrapper.find('button').hasClass('disabled')).toEqual(true);
});

it('無查詢時開啟按鈕', ()=>{
  const wrapper = shallow(<TsaSung 正在查詢={false}/>);
  expect(wrapper.find('button').hasClass('disabled')).toEqual(false);
});

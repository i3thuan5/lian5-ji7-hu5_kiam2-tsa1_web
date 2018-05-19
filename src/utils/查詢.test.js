import React from 'react';
import { shallow } from 'enzyme';
import TsaSung from './查詢';

it('正在查詢時鎖住按鈕', ()=>{
  const wrapper = shallow(<TsaSung 正在查詢={true}/>);
  expect(wrapper.find('button').disabled()).toEqual(true);
});

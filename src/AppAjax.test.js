jest.mock('./utils/請求');

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('ajax回來更新state書寫檢查', async () => {
  const wrapper = shallow(<App/>);
  await wrapper.find('button').simulate('click');
  wrapper.update();
  expect(wrapper.state()).toEqual({
    結果: [{漢字: '漢字', 臺羅: '臺羅', 檢查: 'pass'}]
  });
});
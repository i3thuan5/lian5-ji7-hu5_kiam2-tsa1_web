import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
jest.mock('./utils/請求');

it('ajax回來更新state書寫檢查', (done) => {
  const wrapper = shallow(<App/>);
  wrapper.find('button').simulate('click');
  process.nextTick(() => {
    wrapper.update();
    expect(wrapper.state()).toEqual({
      結果: [{漢字: '漢字', 臺羅: '臺羅', 檢查: 'pass'}]
    });
    done();
  });
});
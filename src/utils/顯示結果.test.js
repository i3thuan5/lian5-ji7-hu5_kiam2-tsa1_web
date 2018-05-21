import React from 'react';
import ReactDOM from 'react-dom';
import  { shallow } from 'enzyme';
import { Block } from 'demo-ui';
import 顯示結果 from './顯示結果';

it('剛進網頁時不會有顯示結果', () => {
  const fakeProps = {'結果': null};
  const eleWrapper = shallow(<顯示結果 {...fakeProps}/>);
  expect(
    //return的最外層是div
    eleWrapper.closest('div').children().length
  ).toEqual(0);
});


it('收到傳來結果的props', () => {
  const fakeProps = {
    '結果': [
      {漢字:'媠', 臺羅:'sui2', 檢查: []}
  ]};
  const eleWrapper = shallow(<顯示結果 {...fakeProps}/>);
  //return的最外層是div
  expect(eleWrapper.closest('div').children().length).toEqual(1);
});

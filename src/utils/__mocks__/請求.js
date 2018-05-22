

export const 請求書寫檢查 = jest.fn(對齊結果 => {
  let { 多元書寫 } = 對齊結果;
  return new Promise((resolve, reject) => {
    resolve({結果: [{...多元書寫[0], 檢查: []}]});
  });
});



export const 請求對齊章物件 = jest.fn((漢字, 臺羅) => {
  return new Promise((resolve, reject) => {
    resolve({
      查詢腔口: '閩南語',
      多元書寫: [{漢字, 臺羅}]
    });
  });
});

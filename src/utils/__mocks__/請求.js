

// export function 請求書寫檢查(漢字, 臺羅) {
//   console.log('漢字, 臺羅=', 漢字, 臺羅)
//   return new Promise((resolve, reject) => {
//     resolve({結果: [{漢字: '漢字', 臺羅: '臺羅', 檢查: 'pass'}]});
//   });
// };


export const 請求書寫檢查 = jest.fn((漢字, 臺羅) => {
  console.log('jest.fn: 漢字, 臺羅=', 漢字, 臺羅);
  return Promise.resolve({"結果": [{"檢查": "pass", "漢字": "漢字", "臺羅": "臺羅"}]});
});
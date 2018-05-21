

export const 請求書寫檢查 = jest.fn((漢字, 臺羅) => {
  return new Promise((resolve, reject) => {
    resolve({結果: [{漢字, 臺羅, 檢查: []}]});
  });
});

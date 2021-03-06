
export const 請求對齊章物件 = jest.fn((漢字, 臺羅) => {
  return new Promise((resolve, reject) => {
    if(漢字 === 'ccc') {
      //mock reject
      reject("對齊失敗");
    }
    else {
      //mock resolve
      resolve({
        查詢腔口: '閩南語',
        //假設只回傳一个對齊章物件的漢字臺羅
        多元書寫: [{漢字, 臺羅斷詞: 臺羅}]
      });
    }
  });
});

export const 請求書寫檢查 = jest.fn(對齊結果 => {
  let { 多元書寫 } = 對齊結果;
  let { 漢字, 臺羅斷詞 } = 多元書寫[0];
  return new Promise((resolve, reject) => {
    //mock resolve
    resolve({結果: [
      //根據對齊章物件，請求一組對齊句子的書寫檢查
      {漢字, 臺羅: 臺羅斷詞, 檢查: []}
    ]});
  });
});



/* export const 請求書寫檢查 = (漢字, 臺羅) =>
  fetch('https://服務.意傳.台灣/書寫檢查', {
     // regular fetch option
    method: 'GET',
    body: JSON.stringify({漢字, 臺羅})
}); */

//static api
export const 請求書寫檢查 = (漢字, 臺羅) => {
  return new Promise((resolve, reject) => {
    resolve({結果: [
      {漢字, 臺羅, 檢查: []},
      {漢字, 臺羅, 檢查: ['1:3 違反動詞原則','1:3 違反動詞原則']},
      {漢字, 臺羅, 檢查: []},
    ]});
  });
};

export const 請求對齊章物件 = (漢字, 臺羅) => {
  return fetch('https://服務.意傳.台灣/漢字音標對齊', {
    method: 'GET',
    body: JSON.stringify({漢字, 臺羅, 查詢腔口: '閩南語'})
  });
}

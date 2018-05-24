

export const 請求一句書寫檢查 = (漢字, 臺羅) => {
  let url = new URL('https://詞彙分級資料庫.意傳.台灣/連字符');
  let params = {漢字, 臺羅};
  //manually append query paramters
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  //request
  return fetch(url, {method: 'GET'})
    .then(data => Promise.reject('系統發生錯誤，無法度檢查這句。'))
    // .then(response => response.json())
    // .then(myjson => ({...myjson, 漢字, 臺羅}))
    //resolve error to not interrupt other 請求一句書寫檢查 request
    .catch(error => ({請求失敗: error, 漢字, 臺羅}));
};


export const 請求書寫檢查 = (對齊章物件) => {
  return Promise.all(
      對齊章物件.多元書寫.map(item => 請求一句書寫檢查(item.漢字, item.臺羅斷詞))
    )
    .then(values => ({結果: values}))
    .catch(error => `請求書寫檢查發生錯誤, ${error}`);
};

export const 請求對齊章物件 = (漢字, 臺羅) => {
  let url = new URL('https://服務.意傳.台灣/漢字音標對齊');
  let params = {漢字, 音標: 臺羅, 查詢腔口: '閩南語'};
  //manually append query paramters
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  //request
  return fetch(url, {method: 'GET'})
    .then(response => response.json())
    .catch(error => Promise.reject(`請求對齊章物件發生錯誤, ${error}`));
}

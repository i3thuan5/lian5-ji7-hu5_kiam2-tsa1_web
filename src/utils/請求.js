

export const 請求一句書寫檢查 = (漢字, 臺羅) => {
  let url = new URL('https://詞彙分級資料庫.意傳.台灣/連字符');
  let params = {漢字, 臺羅};
  //manually append query paramters
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  //request
  console.log('依據', 漢字, 臺羅);
//   return new Promise((resolve, reject) => {
  return fetch(url, {method: 'GET'})
    .then(response => {
      return response.json();//this is a promise
/*       console.log('response', dataPromise);
          resolve({...dataPromise, 漢字, 臺羅}) */
    })
    .then(myjson => {
      console.log('myjson', myjson, {...myjson, 漢字, 臺羅});
      return Promise.resolve({...myjson, 漢字, 臺羅});
    });
//   });
};


export const 請求書寫檢查 = async function(對齊章物件) {

  return new Promise(async (resolve, reject) => {
    if (對齊章物件.hasOwnProperty('多元書寫')) {
      let p = await Promise.all(
        對齊章物件.多元書寫.map(item => 請求一句書寫檢查(item.漢字, item.臺羅斷詞))
      ).then(values => {
        console.log('values=', values);
        resolve({結果: values})
      }).catch(error =>
        reject('請求書寫檢查發生錯誤')
      );

    } else {
      reject('對齊章物件應有多元書寫');
    }
  });
}

export const 請求對齊章物件 = (漢字, 臺羅) => {
  let url = new URL('https://服務.意傳.台灣/漢字音標對齊');
  let params = {漢字, 音標: 臺羅, 查詢腔口: '閩南語'};
  //manually append query paramters
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  //request
  return fetch(url, {method: 'GET'}).then(response => response.json());
}

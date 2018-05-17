

export const 請求書寫檢查 = (漢字, 臺羅) => 
  fetch('http://www.orcascan.com', {
     // regular fetch option
    method: 'GET',
     // add reply for this fetch
    body: JSON.stringify({漢字, 臺羅})
});


export function 請求書寫檢查(漢字, 臺羅) {
  console.log('漢字, 臺羅=', 漢字, 臺羅)
  return new Promise((resolve, reject) => {
    resolve({結果: [{漢字: '漢字', 臺羅: '臺羅', 檢查: 'pass'}]});
    // process.nextTick(
    //   () =>
    //     漢字 && 臺羅
    //       ? resolve({結果: [{漢字: '漢字', 臺羅: '臺羅', 檢查: 'pass'}]})
    //       : reject({
    //           error: 'not found.',
    //         }),
    // );
  });
};


// export const 請求書寫檢查 = ({漢字, 臺羅}) => 
//   Promise.resolve({漢字: '漢字', 臺羅: '臺羅', 檢查: 'pass'});
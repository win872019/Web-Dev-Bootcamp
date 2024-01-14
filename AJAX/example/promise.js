/* from chatGPt */



const myPromise = new Promise((resolve, reject) => {
    // 異步操作，例如發送網路請求、讀取檔案等
  
    // 如果操作成功，調用 resolve 函數
    // resolve 會將 Promise 的狀態從 pending 變為 fulfilled
    resolve("Operation successful");
  
    // 如果操作失敗，調用 reject 函數
    // reject 會將 Promise 的狀態從 pending 變為 rejected
    // reject("Operation failed");
  });
  
  // 使用 then 方法處理異步操作成功的情況
  myPromise.then((result) => {
    console.log("Success:", result);
  });
  
  // 使用 catch 方法處理異步操作失敗的情況
  // myPromise.catch((error) => {
  //   console.error("Error:", error);
  // });
  
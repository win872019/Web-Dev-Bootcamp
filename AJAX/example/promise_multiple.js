// /* from chatGPt */

// function asyncOperation1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Async Operation 1 completed");
//         resolve(1);
//       }, 1000);
//     });
//   }

//   function asyncOperation2(resultFromAsyncOperation1) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Async Operation 2 completed with result:", resultFromAsyncOperation1);
//         resolve(2);
//       }, 1000);
//     });
//   }

//   function asyncOperation3(resultFromAsyncOperation2) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Async Operation 3 completed with result:", resultFromAsyncOperation2);
//         resolve(3);
//       }, 1000);
//     });
//   }

//   // 開始進行串聯
//   asyncOperation1()
//     .then(asyncOperation2)
//     .then(asyncOperation3)
//     .then((finalResult) => {
//       console.log("Final result:", finalResult);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

class obj {
  ne(k, v) {
    this[k] = v;
  }
}

let friends=["Harry","Ron","Snap"];
let reversed_friends=[];

for(let i=friends.length-1;i>=0;i--){
  reversed_friends.push(friends[i]);
}
console.log(reversed_friends);







// let arr1=[0,-22,244,23,457,-1];
// let ans=maxNum(arr1);

// console.log(ans);


// function maxNum(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   let maxN = Number.MIN_VALUE;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxN) {
//       maxN = arr[i];
//     }
//   }

//   return maxN;
// }





/* Add Up to a Number */
console.log(addUpTo(100));


function addUpTo(num){
  let ans=0; // 需初始化為0，否則計算結果將為 undefined
  for(let i=1; i<=num;i++){
    ans+=i;
  }
  return ans;
}




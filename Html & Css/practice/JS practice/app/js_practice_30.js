/* Simple Exercise I */

/* 1 */
printMany();

function printMany(){
  for(let i=1; i<=100;i++){
    console.log(i);
  }
};



/* 2 */
printEvery3();
function printEvery3(){
  for(let i=1; i<=88;i+=3){
    console.log(i);
  }
};



/* 3 */
stars(5); 
function stars(n){
  let result="";
  for(let i=1; i<=n;i++){
    result+="*";
  }
  console.log(result);
};



/* 4 */
let ans4=isUpperCase("aBCD");
console.log(ans4);

function isUpperCase(str){
  let str2=str.toUpperCase();
    if(str[0]==str2[0]){
      return true;
    }else{
      return false;
    }
};



/* 5 */
let ans5=isAllUpperCase("ABcD");
console.log(ans5);

function isAllUpperCase(str){
  let str2=str.toUpperCase();
  for(let i=0;i<str.length;i++){
    if(str[i]==str2[i]){
      continue;
    }else{
      return false;
    }
  }
  return true;
};





/* 6 *** */
position("aac"); 
function position(str){
  let str2=str.toUpperCase();
  for(let i=0;i<str.length;i++){
    if(str[i]==str2[i]){
      console.log(str[i], i);
      return;
    }        
  }
  console.log(-1);
 
};




/* 7 */
let ans7=findSmallCount([1, 2, 3, 4, 5], 0);
console.log(ans7);

function findSmallCount(arr, inputN){
  let ans=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<inputN) {
      ans++;
    }
    return ans;
  }
};



/* 8 */
let ans8=findSmallerTotal([3, 2, 5, 8, 7], 999);
console.log(ans8);

function findSmallerTotal(arr, inputN){
  let sum=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<inputN) {
      sum+=arr[i];
    }    
  }
  return sum;
};




/* 9 */
let ans9=findSmallerTotal([1, 3, 5, 4, 2], 4);
console.log(ans9);

function findSmallerTotal(arr, inputN){
  let ans=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<inputN) {
      ans.push(arr[i]);
    }    
  }
  return ans;
};




/* 10 */
let ans10=sum([-10, -20, -30]);
console.log(ans10);

function sum(arr){
  let ans=0;
  for (let i = 0; i < arr.length; i++) {
    ans+=arr[i];
  }
  return ans;
};




/* Simple Exercise II */
/* 1 */
/* 2 */
/* 3 */
/* 4 */
/* 5 */
/* 6 */
/* 7 */
/* 8 */
/* 9 */
/* 10 */



/* Intermediate Exercise I */
/* 1 */
/* 2 */
/* 3 */
/* 4 */
/* 5 */
/* 6 */
/* 7 */


/* Intermediate Exercise II */
/* 1 */
/* 2 */
/* 3 */
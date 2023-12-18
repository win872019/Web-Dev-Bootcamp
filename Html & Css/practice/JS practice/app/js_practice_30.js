/* Simple Exercise I */
/* 需注意程度 * - *** */

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



/* 4** */
let ans4=isUpperCase("aBCD");
console.log(ans4);

function isUpperCase(str){
  if(str.length==0){
    return false;
  }
  /* ↓簡潔寫法 */ 
  return str[0]==str.toUpperCase()[0]

};



/* 5** 影片答案應該是錯的*/
let ans5=isAllUpperCase("ABcD");
console.log(ans5);

function isAllUpperCase(str){
  if(str.length==0){
    return false;
  }
  for(let i=0;i<str.length;i++){
    if(str[i]==str.toUpperCase()[i]){
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

  for(let i=0;i<str.length;i++){
    if(str[i]==str.toUpperCase()[i]){
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
stars2(4);
function stars2(n){
  let st="";
  for (let i = 1; i <= n; i++){
    st+="*";
    console.log(st);
  }
}




/* 2 */
stars3(1);
function stars3(n){
  let st="";
  for (let i = 1; i <= n; i++){
    if(i>1){
      st+="\n";
    }
    for(let j=1; j<=i;j++){
      st+="*";
    }
  }
  console.log(st);
}




/* 3*** */
star4(6);
function star4(n){
  let st="";
  for (let i = 1; i <= n; i++){
    st+="*";
    console.log(st);
  }
  
  for (let j = n-1; j >0; j--){
    st="";
    for(let t=1; t<=j;t++){
      st+="*";
    }
    console.log(st);      
  }
}




/* 4 */
table(3);
function table(n) {
  for(let i=1; i<=9;i++){
    console.log(`${n} X ${i} = ${n*i}`);
  }
}


/* 5 */
table9to9();
function table9to9() {
  for(let i=1; i<=9;i++){
    for(let j=1; j<=9;j++){
      console.log(`${i} X ${j} = ${i*j}`);
    }
    console.log("\n");
  }
}




/* 6(X) */

function fib(n){
  let a=0;
  let b=0;
  let ans=0;
  for(let i=1;i<=n;i++){
    
    a++;
  
  }

}





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
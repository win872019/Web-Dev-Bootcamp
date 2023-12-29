/* 2個條件 */
let age=18;
let votePermission=age>=18?true:false;

console.log(`votePermission = ${votePermission}`);


/* 多個條件 */
let age2=10;
let price=age2<12?100:age2<18?120:age2<65?150:80;
console.log(`price = ${price}`);



/* default parameter 參數預設 */
function plus(a=0,b=0){
  console.log(a+b);
}

plus(2,3);

plus(7);


/* floating point 浮點數 */
// 有些小數可以算出正確的
console.log(0.1+0.2 == 0.3);
console.log(0.1+0.2);


console.log((0.1+0.2).toFixed(1)==0.3.toFixed(1));
console.log(typeof((0.1+0.2).toFixed(1)));



/* object destructuring 物件解構 */
let classmate1={
  firstName:"Teresa",
  gender:"female",
  year:2000,

  friend:{
    fullName:"Henry Wang",
    f_gender:"male"
  }
}


let {firstName,year,gender}=classmate1;
let {fullName,f_gender}=classmate1.friend;

console.log(firstName,year,gender);
console.log(fullName,f_gender);
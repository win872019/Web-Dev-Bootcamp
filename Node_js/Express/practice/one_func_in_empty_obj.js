/* empty object 直接放入一個function */
/* 模擬 const app = express() */

let sayYo=function(p){
    console.log(`${p} says yo.`);
};

let obj1={
    myName:"Eva",
    ex:{}
};

console.log(typeof obj1.ex);    // output: object

obj1.ex=sayYo;

obj1.ex("Terry");

console.log(obj1.ex);
console.log(typeof obj1.ex);    // output: function
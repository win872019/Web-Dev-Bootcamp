function sayHi(p1,p2){
    console.log(`${p1} says hi to ${p2}.`);
}


function sayBye(p1,p2){
    console.log(`${p1} says good bye to ${p2}.`);
}


/* exports 方法1. */
// exports.sayHi=sayHi;
// exports.saybye=sayBye;


/* exports 方法2. */
module.exports={sayHi,sayBye};



/* 實驗 */
/* 把function和string 直接放進 empty object */

let obj={};
let a="Apple";

obj={sayBye,sayHi,a};

// console.log(obj.a);

obj.sayHi(obj.a,"Patrick");
/* forEach */
//第 1 種寫法
let arr1=[2,188,23,16];

arr1.forEach(checkNum);

function checkNum(n){
    if(n<20){
        console.log(n);
    }
}


//第 2 種寫法
let arr2=[30,23,42,1,22];

arr2.forEach(function checkNum(n){
    if(n<30){
        console.log(n);
    }
});


// 第 3 種寫法 - 同 2. ，function 不用取名字
// anonymous function
let arr3=[12,23,2,1];

arr3.forEach(function(n){
    if(n<20){
        console.log(n);
    }
});



// 第 4 種寫法 - 同 2. 3.
// function declaration 換成 arrow function expression

let arr4=[12,20,2,1];

arr4.forEach(n=>{
    if(n<10){
        console.log(n);
    }
});


// 第 4 種寫法 - 同 1.
// function declaration 換成 arrow function expression
let arr5=[12,20,2,1];

let chN=n=>{
    if(n>10){
        console.log(n);
    }
}

arr5.forEach(chN);




// callback function 可放入 parameter

let arr6=[12,20,2,1];

arr6.forEach((n,indexN,arr)=>{
    if(n<10){
        console.log(n, indexN, arr);
    }
});

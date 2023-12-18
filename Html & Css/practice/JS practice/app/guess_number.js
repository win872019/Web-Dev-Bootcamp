
let ans=Math.floor(Math.random()*100);

let n1=0;
let n2=99;



while(true){
let input=Number(prompt(`輸入猜測(${n1} - ${n2})`));
if(input<n1 || input>n2||isNaN(input)){
    alert("猜測無效。請重新猜測一個數字")

}else if(input==ans){
    alert(`恭喜猜對！答案是${ans}`);
    break;
}else if(input<ans){
    n1=input;

}else if(input>ans){
    n2=input;

}

}







// function check(input){
//     while(isNaN(input)){
//         input=prompt("請輸入0-99之間的「數字」: ");
//         input=Number(input);
//     };
//     while(input>99||input<0){
//         input=prompt("請輸入「0-99」之間的數字: ");
//     input=Number(input);
//     };
    
// };

// let a = Number("q");
// console.log(isNaN(a));


// let a=Math.random();
// console.log(a);
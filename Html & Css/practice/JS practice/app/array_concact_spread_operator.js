/* array concat */ 

let arr1=[3,12,5,245,199];
let arr2=[2,73];
let arr3=["Lina","Bob"];
let arr4=["Josh", "Mary","Jim"]

console.log(arr1.concat(arr2).concat(arr3));


/* array concact with ... */
console.log([...arr1, ...arr2, ...arr4]);




/* Infinity & NaN */

console.log(NaN!=NaN);
console.log(Infinity == Infinity);



/* math.Max */
console.log(Math.max(13,1,35,6));




/* ... spread operator */
num(100,2,4,22,1)

function num(...numbers){
    console.log(numbers);
    let max=-Infinity;
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    console.log(`max = ${max}`);
}


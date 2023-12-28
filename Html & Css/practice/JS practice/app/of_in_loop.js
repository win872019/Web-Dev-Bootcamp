let arr1=[1,23,2,77,10];


// obj array
let arr2=[
    {
    myName: "Sherry",
    height: 177,
    sayHi(nam){
        alert(`${this.myName} says hi to ${nam}.`)
    }
}, 
{
    myName: "George",
    height: 182,
    walk(){
        alert(`${this.myName} is walking.`)
    }
}];




/* for of */
for(let n of arr1){
    console.log(n);
}




/* for in*** */
for(let p in arr2){
    console.log(arr2[p].myName);
}


for(let i in arr2[1]){
    console.log(arr2[1][i]);
}

let str="hello";
for(let a in str){
    console.log(str[a]);
}


// obj
for(let p in arr2[0]){
    console.log(p);
    console.log(arr2[0][p]);
    console.log(typeof p);
}




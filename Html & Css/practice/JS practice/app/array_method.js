let arr1=[1,23,2,77,10];


// obj array
let arr3=[
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
}]




/* .map() */
arr1.map(n=>{
    console.log(n);
});

// arr1.map(n=>{
//     alert(n);
// });
console.log("******分隔線*******");

let new_map=arr1.map(n=>{
    return n;
});

console.log(new_map);





/* .find() */
let new_find=arr1.find(n=>{
    return n>5;
});

console.log(new_find);


let new_find_p=arr3.find(n=>{
    return n.height>170;
})

console.log(new_find_p);

// new_find_p.sayHi("Woody");



/* .filter() */
let new_filter=arr1.filter(n=>{
    return n>5;
});

console.log(new_filter);



let new_filter_p=arr3.filter(n=>{
    return n.height>170;
})

console.log(new_filter_p);

// new_filter_p[0].sayHi("Henry");




/* .some() */
console.log(arr1.some(n=>{
    return n>5;
}));



/* .every() */
console.log(arr1.every(n=>{
    return n>5;
}));




/* .sort() - string */
let arr4=[41,3,22,7,18];
let arr2=["Patrick","Frank","Lala","Charlotte", "Leo"];


arr2.sort();
console.log(arr2);
console.log("~~~~~~~~~~分隔線~~~~~~~~~~");

/* length sort */
arr2.sort((a,b)=>{
    return a.length-b.length;
});

console.log(arr2);



/* .sort() - number */
arr4.sort((a,b)=>{
    return a-b;
});


console.log(arr4);




arr4.sort((a,b)=>{
    return b-a;
});

console.log(arr4);
/* arrow function expression */

let sayHi=(nam)=>{
    console.log(`${nam} says hi.`);
}

sayHi("Anna");



/* arrow function expression in obj*/
let Albert={
    name: "Albert Lee",
    greet(){
        console.log(this);
        console.log(`${this.name} says hi.`);
    },

    
    walk:()=>{
        console.log(this);
        console.log("He is walking.");
    }
}


Albert.greet();
Albert.walk();

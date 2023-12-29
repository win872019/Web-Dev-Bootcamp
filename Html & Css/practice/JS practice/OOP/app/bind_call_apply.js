/* bind, call, apply */

let car1 = { Brand: "Fort", color: "silver", year: 2020 };
let car2 = { Brand: "BMW", color: "black", year: 2000 };

function stopAt(location, minute){
  console.log(`The ${this.color} ${this.Brand} has stop at ${location} for ${minute} minutes.`);

  console.log(this);
}

let c1_b=stopAt.bind(car1);
c1_b("the park",3);


stopAt.call(car2, "the gas station",10);

stopAt.apply(car1,["the parking lot",20]);




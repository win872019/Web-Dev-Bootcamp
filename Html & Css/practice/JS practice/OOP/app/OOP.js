/* Constructor */
function Person(myName, age){
  
  // console.log(this);

  this.myName=myName,
  this.Age=age,
  this.sayHi=function(other){
    console.log(`${this.myName} says hi to ${other}`);
  }
}

let p1= new Person("Jerry", 20);
let p2= new Person("Zara", 23);


p1.sayHi("Linda");
console.log(p1.myName, p1.Age);
console.log(p2.myName, p2.Age);

console.log(p1.sayHi==p2.sayHi);   // output: false ，各自存在記憶體不同的位置



/* Prototype */
function Car(brand,color,year){
  this.Brand=brand,
  this.color=color,
  this.year=year
}

// 共用 method
Car.prototype.start=function(person){
  console.log(`${person} is ready to drive this ${this.color} ${this.Brand}`);
}

// 共用 property - string
Car.prototype.Agent="Kingdom Co.";

// 共用 property - obj
Car.prototype.salesman={
  first_name:"Leo",
  ID:1
};

Car.prototype.salesman.sayHey=function(guest){
  console.log(`${this.first_name} says hi to ${guest}.`);
}


// 實例化
let car1=new Car("Fort","silver",2020);
console.log(car1.Brand);

let car2=new Car("BMW","black",2000);


car1.start("Linda");

console.log(car1.start==car2.start);      // output: true


// 共用的 prototype - string proerty
console.log(car1.Agent);
console.log(car2.Agent);

console.log(car1.Agent==car2.Agent);       // output: true


// 共用的 prototype - obj proerty
// prtotype 可以再有自己的 prototype
console.log(car1.salesman.first_name);
car1.salesman.sayHey("Sherry");
console.log(car1.salesman.sayHey==car2.salesman.sayHey);    // output: true









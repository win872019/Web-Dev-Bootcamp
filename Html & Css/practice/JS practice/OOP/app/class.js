/* prototype inheritance */

function Person(myName, age){
  this.MyName=myName,
  this.Age=age
}

Person.prototype.sayHi=function(p){
  console.log(`${this.MyName} says hi to ${p}.`);
}

Person.prototype.walking=function(){
  console.log(`${this.MyName} is walking.`);
}

// let p1= new Person("George", 23);
// console.log(p1);
// p1.sayHi("Vivian");

function Student(mName,mAge,major){
  // 這裡的 this 是new出來的student empty obj
  Person.call(this,mName,mAge);
  this.Major=major
}




/* method 繼承*/

Student.prototype=Object.create(Person.prototype)


// 測試
let s1=new Student("Cindy",20,"EE");
console.log(s1);
s1.sayHi("Benny");
s1.walking();

console.log(Student);


/* Class */
class Monster{
  constructor(color,height){
    this.Color=color,
    this.Height=height
  }
  saysYo(){
    console.log(`${this.Color} monster says YO.`);
  }
  shakeHand(p){
    console.log(`${this.Color} monster shake hand to ${p}.`);
  }
}

let m1=new Monster("blue",300);
m1.shakeHand("Andy");


/* Class繼承 */ 

class OceanMonster extends Monster{
  constructor(sColor,sHeight,weight){
    super(sColor,sHeight);
    this.Weight=weight;
  }
}

let om1=new OceanMonster("pink",490,200);
console.log(om1);
om1.shakeHand("Neo");


/* static */
class Counter {
  static count = 0;

  static increment() {
    this.count++;
  }
}


for(let i=1;i<=3;i++){
  Counter.increment();
}

console.log(Counter.count); // output: 3

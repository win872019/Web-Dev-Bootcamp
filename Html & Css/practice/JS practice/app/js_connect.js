// let YourName = prompt("輸入姓名:");
// alert("hello, " + YourName);

/* string methods */
// let str = "abcdef";
// console.log(str.slice(2,5));
// //output: cde

// let str2="Amy is a very smart student.";
// console.log(str2.split("s"));

/* typeof */
// let str3="true";
// let str4=true;

// console.log(typeof(str3),typeof(str4));

// console.log(4!="4");

/* if */
// let age = prompt("輸入年齡: ");

// if(age < 14){
//     alert("兒童票 $100");

// }else if(age<=18){
//     alert("青年票 $120");
// }else if(age<=65){
//     alert("成人票 $150");
// }else{
//     alert("老年票 $80");
// }

/* function */
// function sayHi() {
//   console.log("hi!");
// }

// sayHi();

/* array */
// let students=["Randy","Leo", "Shirley","May"];
// console.log(students[0]);

// /* array methods */
// let arrLength=students.push("Danny");
// console.log(students);
// console.log(arrLength);

/* object */
// let car1 = {
//   brand: "toyota",
//   color: "red",
//   drive(speed) {
//     console.log(
//       "The " +
//         this.color +
//         " " +
//         this.brand +
//         " is driving at " +
//         speed +
//         "km/hr."
//     );
//   },
// };
// car1.drive(100);

/* for loop */
// for(let i=0;i<10;i++){
//     console.log(i);
// }

// for(let i=0;i<10;i++){
//     console.log(i+1);
// }

/* while loop*/
// let j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }



/* continue, break */
/* 只作用在自己這一層loop*/
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     for (let t = 0; t < 3; t++) {
//         if(t==1){
//             break;
//         }
//       console.log("t = "+ t);
//     }
//     console.log("j = " + j);
//   }
//   console.log("i = " + i);
// }



for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let t = 0; t < 3; t++) {
        if(t==1){
            continue
        }
      console.log(i,j,t);
    }

  }
 
}

/* getElementById, getElementsByClassName */

let htag = document.getElementById("h1-1");
let ptag = document.getElementsByClassName("p");
console.log(htag);
console.log(ptag);

/* querySelector */

let qs = document.querySelector("#h1-1");
console.log(qs);

let qs2 = document.querySelector("h1#h1-1");
console.log(qs2);

/* querySelectorAll */
let qsa = document.querySelectorAll(".p");
console.log(qsa);
console.log(qsa[0]);
console.log(qsa[1]);

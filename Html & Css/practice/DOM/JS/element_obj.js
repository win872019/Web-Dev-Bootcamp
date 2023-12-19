/* children, childNodes */
let parent_element = document.querySelector("body");
console.log(parent_element.children); //HTML Collection
console.log(parent_element.childNodes); //NodeList

/* parentElement */
let p2 = document.querySelector(".p.p2");
console.log(p2);
let parent_element2 = p2.parentElement;
console.log(parent_element2);
console.log(parent_element2.parentElement);

/* innerHTML, innerText */
let h3 = document.querySelector(".sub_topic");
h3.innerHTML = "這是<mark>第三個</mark>標題";

let p3 = document.querySelector(".p3");
p3.innerText = "使用innerText更改的文字";

/* appendChild() */
let d1 = document.querySelector(".d1");
let append_p = document.createElement("p");

append_p.innerText = "新增的 p tag ";

d1.appendChild(append_p);

/* classList - add(), remove(), toggle(), contains() */
let d2_p = document.querySelector(".d2 p");
console.log(d2_p);

d2_p.classList.add("aquaBg", "bigFont", "greenFont");

let d2_p4 = qs(".p4");
d2_p4.classList.remove("bolder", "pinkBg");

// toggle()的parameter 只能有 1 個
let d2_p5 = qs(".p5");
d2_p5.classList.toggle("bolder");
d2_p5.classList.toggle("orangeBorder");
d2_p5.classList.toggle("greenFont");
d2_p5.classList.toggle("bigFont");

// contains()的parameter 只能有 1 個
let d2_p6 = qs(".p6");
let ans = d2_p6.classList.contains("bolder");
console.log(`ans = ${ans}`);

/* 自定義的 querySelector function */
function qs(str) {
  return document.querySelector(str);
}

/*  */

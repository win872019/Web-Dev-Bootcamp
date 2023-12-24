// console.log(localStorage);
// console.log(sessionStorage);


localStorage.clear();

// localStorage.setItem("color","silver");
// localStorage.setItem("brand","Mazda");

let c1=document.querySelector("button");
c1.addEventListener("click",()=>{
    alert(`the color is ${localStorage.getItem("color")}`);
});

localStorage.removeItem("brand");
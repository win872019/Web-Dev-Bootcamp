const express = require("express");
const app = express();

const ejs=require("ejs");



// middleware
app.use(express.static("public"));



// 給 get_started.ejs 實驗用
let classA=[{
    fullName:"Anna, Lin",
    score: 92
},
{
    fullName:"Jennie, Wang",
    score: 67
},
{
    fullName:"Kenny, Walker",
    score: 84
}];





app.get("/",(req,res)=>{
    
    res.render("get_started.ejs",{classA});
});



/* way 1. 使用 params 和 obj */
app.get("/:a",(req,res)=>{
    let {a}=req.params;
    res.render("get_started_2.ejs",{a,b:"Hi",c:23})
});




/* way 2. 在.ejs 裡使用 javascript */
app.get("/js/ejs",(req,res)=>{
    
    res.render("js_in_ejs.ejs")
});





app.listen(200,()=>{
    console.log("Server is running at port 200.");
})




/* object 解構 - 實驗 */

let obj1={
    myName:"Leo",
    age:20
}

let {myName,age}=obj1;

let obj2={myName,age};

// console.log(obj2);
// console.log(obj2.myName);
const express=require("express");
const app=express();

const path=require("path");


/* 空白表格頁面 */
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form_handling_get.html"));
});




/* 接收表格 & 處理 */
app.get("/formHandling",(req,res)=>{
    console.log(req.query);

    let{Name,Age}=req.query;
    res.send(`<h2>Hi,${Name}!/  Your age is ${Age}.<h2>`);

    // res.send("Thanks for sending data.");
})


app.listen(100, ()=>{
    console.log("Server is running at port 100.");
});
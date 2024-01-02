const express=require("express");
const app=express();
const bodyParser=require("body-parser");

const path=require("path");

// middleware
app.use(bodyParser.urlencoded({extended:true}));


/* 空白表格頁面 */
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form_handling_post.html"));
});




/* 接收表格 & 處理 */
app.post("/formHandling",(req,res)=>{
    // console.log(req.body);

    let{Name,Age}=req.body;
    res.send(`<h2>Hi,${Name}! Thanks for posting. Your age is ${Age}.<h2>`);
})


app.listen(100, ()=>{
    console.log("Server is running at port 100.");
});
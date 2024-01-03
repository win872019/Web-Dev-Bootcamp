const express = require("express");
const app = express();

const path =require("path");





/*  routing */
app.get("/",(req,res)=>{
    console.log(res.statusCode);
    res.send("<i>This is homepage.</i>")
});




/* routing - params */
app.get("/:a",(req,res)=>{
    console.log(req.params);
    console.log(res.statusCode);
    
    res.send(`a = ${req.params.a}`);
});



/* 404 Not Found - 處理不存在頁面 */
app.get("*",(req,res)=>{
    
    res.status(404).sendFile(path.join(__dirname,"404NotFound_page.html"));
    console.log(res.statusCode);
    
});




app.listen(200,()=>{
    console.log("Server is running at port 200.");
})

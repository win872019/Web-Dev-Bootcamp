const express = require("express");
const app = express();
const path=require("path");


// middleware
app.use(express.static("public"));



/*  routing */
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"static_file.html"));
});






app.listen(200,()=>{
    console.log("Server is running at port 200.");
})

const express = require("express");
const app = express();

const ejs=require("ejs");



// middleware - use static files in "public" folder
app.use(express.static("public"));





app.get("/",(req,res)=>{
    
    res.render("index.ejs",{classA});
});






app.listen(200,()=>{
    console.log("Server is running at port 200.");
})
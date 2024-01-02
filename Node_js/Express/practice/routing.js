const express = require("express");
const app = express();

// console.log(express);



/*  routing */
app.get("/",(req,res)=>{
    res.send("<i>This is homepage.</i>")
});


/* send an object   */
app.get("/obj",(req,res)=>{

    let obj1={
        myName:"Henry",
        height:186
    }
    
    res.send(obj1);    
});


/* routing - params */
app.get("/:a",(req,res)=>{
    console.log(req.params);
    
    res.send(`a = ${req.params.a}`);
});

/* routing - params (物件解構寫法) */
app.get("/:a/:b",(req,res)=>{
    console.log(req.params);
    let {a,b}=req.params;
    res.send(`a = ${a}, b = ${b}`);
});


/* "*" */
app.get("*",(req,res)=>{
    res.send("ERROR! The page doesn't exit.")
});




app.listen(200,()=>{
    console.log("Server is running at port 200.");
})

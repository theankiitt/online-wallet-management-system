import express from 'express';
const app=express();


app.get("/",(req,res)=>{
    res.send("hi, ankit")
})

app.get("/user",(req,res)=>{
    res.json({
        "name":"ankit",
        "address":"bhaktapur"
    })
})



export default app;
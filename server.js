const express = require('express');
const app = express();//app is a backend application

app.get("/",(req,res)=>{
    res.send("Welcome to my Eymi's backend application");
});// forward slash means the context root of the application, or the url without anything after it

app.get("/sean",(req,res)=>{
    res.send("Hello Eymi!");
});


app.listen(3000,()=>{
    console.log("Listening");
});
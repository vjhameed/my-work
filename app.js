/**
 * Created by Administrator on 5/6/2017.
 */
const express = require('express');
var app = express();

//a simple express web server
app.set("view engine","ejs");
app.use(express.static("/public"));

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`)
    next ()
})

app.get("/",(req,res)=>{
        res.render("index");
})

app.listen(3000,()=>console.log("server has started"));
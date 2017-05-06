/**
 * Created by Administrator on 5/6/2017.
 */
const express = require('express');
var app = express();


app.set("view engine","ejs");
app.use(express.static("/public"));


app.get("/",(req,res)=>{
        res.render("index");
});

app.listen(3000,()=>console.log("server has started"));
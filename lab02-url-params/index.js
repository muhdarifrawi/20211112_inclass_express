const express = require("express");
const hbs = require("hbs");

let app = express();

// inform express that the view engine is hbs
app.set("view engine","hbs");

app.get("/", function(req,res){
    res.render("index");
})


// go to url localhost:3000/hello/Arif and see what happens
app.get("/hello/:name", function(req,res){
    let name = req.params.name;
    res.send("Hello " + name);
})

app.get("/add/:number1/:number2", function(req,res){
    let n1 = req.params.number1;
    let n2 = req.params.number2;
    res.send("Sum is: " + n1 + n2);
})

app.listen(3000,function(){
    console.log("Server started");
})